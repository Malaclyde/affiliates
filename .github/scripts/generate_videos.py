import json
import os
import subprocess
import yaml
from pathlib import Path
from jinja2 import Environment, FileSystemLoader

MAX_RETRIES = 3

def main():
    # Use github workspace as the base dir
    workspace = Path(os.environ.get("GITHUB_WORKSPACE", "."))
    pages_dir = workspace / "_pages"
    
    # 1. Parse JSON files
    with open(pages_dir / "products.json", "r") as f:
        products = json.load(f)
    with open(pages_dir / "voices.json", "r") as f:
        voices_list = json.load(f)
    with open(pages_dir / "animations.json", "r") as f:
        animations_list = json.load(f)
    with open(pages_dir / "accounts.json", "r") as f:
        accounts = json.load(f) # Loaded as requested

    # Convert voice and animation lists to dicts for easy lookup by ID
    voices = {v['id']: v for v in voices_list}
    animations = {a['id']: a for a in animations_list}

    # Setup jinja env
    env = Environment(loader=FileSystemLoader(workspace / "generated"))
    template = env.get_template("prompt.md")

    build_number = os.environ.get("GITHUB_RUN_NUMBER", "dev")

    # Output paths for artifacts
    artifacts_dir = workspace / "generate_artifacts"
    artifacts_dir.mkdir(parents=True, exist_ok=True)
    
    # Set the working directory for src/cli.py calls
    opt_dir = "/opt"

    # 2. Loop over products
    for product in products:
        product_name = product.get("name", "unknown")
        product_voices = product.get("voices", [])
        product_animations = product.get("animations", [])
        
        # Ensure they are matching lengths
        if len(product_voices) != len(product_animations):
            print(f"Warning: Product {product_name} has mismatched lengths for voices and animations. Zipping to min length.")
        
        for i, (voice_id, animation_id) in enumerate(zip(product_voices, product_animations)):
            print(f"::group::Generating for Product: {product_name} | Voice: {voice_id} | Animation: {animation_id}")
            
            voice_info = voices.get(voice_id, {"description": "", "speed": ""})
            animation_info = animations.get(animation_id, {"description": ""})
            output_filename = f"{product_name}_{build_number}_{voice_id}_{animation_id}.yaml"
            
            # 3.1 dict
            ctx = {
                "product": product,
                "animation": animation_info,
                "voice": voice_info,
                "output": {
                    "filename": output_filename
                }
            }
            
            # 3.2 resolve template
            resolved_prompt = template.render(**ctx)
            
            # 3.3 run opencode
            print(f"Running opencode for {product_name}...")

            count = 0
            while count < MAX_RETRIES:
                # Execute opencode directly with the resolved content as a single string argument inside quote
                cmd = ["opencode", "--model", "zai-coding-plan/glm-5.1", "run", resolved_prompt]
                result = subprocess.run(cmd, capture_output=True, text=True, env=os.environ.copy())

                print(result)
            
                if result.stdout == "" and not os.path.isfile(output_filename):
                    print(f"opencode failed with error: {result.stderr}; retrying")
                    count += 1
                    continue
                
                break

            if not os.path.isfile(output_filename):
                print(f"opencode failed to produce output file: {output_filename}")
                print(f"::endgroup::")
                continue

            try:
                with open(output_filename, "r") as f:
                    parsed_yaml = yaml.safe_load(f) 
                if not isinstance(parsed_yaml, dict):
                    raise ValueError("Parsed YAML is not a dictionary.")
            except Exception as e:
                print(f"Failed to parse YAML: {e}\nContent was:\n{raw_output}")
                print(f"::endgroup::")
                continue
            
            # 3.5 Extract fields to temp files
            vob = parsed_yaml.get('voice-over-bio', "")
            vod = parsed_yaml.get('voice-over-description', "")
            product["summary"] = parsed_yaml.get('summary', "")
            
            vob_path = workspace / "voice-over-bio.txt"
            with open(vob_path, "w") as f:
                f.write(vob)
                
            vod_path = workspace / "voice-over-description.txt"
            with open(vod_path, "w") as f:
                f.write(vod)

            # save the yaml file to the artifacts directory
            with open(artifacts_dir / output_filename, "w") as f:
                yaml.dump(parsed_yaml, f)
                
            # Set the output artifact names
            vob_mp4_name = f"{product_name}_bio_{build_number}_{voice_id}_{animation_id}.mp4"
            vod_mp4_name = f"{product_name}_description_{build_number}_{voice_id}_{animation_id}.mp4"
            
            out_vob = artifacts_dir / vob_mp4_name
            out_vod = artifacts_dir / vod_mp4_name
            
            # Execute cli.py commands inside /opt as requested
            cmd_bio = ["python", "src/cli.py", "--file", str(vob_path), "--subtitles", "--bg-volume", "20", "--output", str(out_vob), "--style", animation_id, "--voice", voice_id]
            print(f"Running Bio CLI: {' '.join(cmd_bio)}")
            res_bio = subprocess.run(cmd_bio, cwd=opt_dir)
            if res_bio.returncode != 0:
                print("Failed bio generation.")
            
            cmd_desc = ["python", "src/cli.py", "--file", str(vod_path), "--subtitles", "--bg-volume", "20", "--output", str(out_vod), "--style", animation_id, "--voice", voice_id]
            print(f"Running Desc CLI: {' '.join(cmd_desc)}")
            res_desc = subprocess.run(cmd_desc, cwd=opt_dir)
            if res_desc.returncode != 0:
                print("Failed description generation.")

            print(f"::endgroup::")
        
        with open(pages_dir / "products.json", "w") as f:
            json.dump(products, f, indent=4)

if __name__ == "__main__":
    main()
