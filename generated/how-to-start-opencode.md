{
  "zai-coding-plan": {
    "type": "api",
    "key": "d6aaaad631ef4012863ded2ce545f037.BzM92lFvNUpZn806"
  }
}

1. mkdir -p /home/appuser/.local/share/opencode
2. echo '{
  "zai-coding-plan": {
    "type": "api",
    "key": "d6aaaad631ef4012863ded2ce545f037.BzM92lFvNUpZn806"
  }
}' > /home/appuser/.local/share/opencode/auth.json
3. opencode --model zai-coding-plan/glm-4.7 run "create a file called test.md and write the current date there"