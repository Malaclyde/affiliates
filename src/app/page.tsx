import { getAboutMe, getProducts } from '@/lib/data';
import ProductTile from '@/components/ProductTile';

export default function Home() {
  const aboutMe = getAboutMe();
  const products = getProducts();

  const contactOptions = Object.entries(aboutMe).filter(
    ([key]) => !['name', 'description'].includes(key)
  );

  return (
    <main>
      <h1>Meet {aboutMe.name}</h1>
      <p className="description">{aboutMe.description}</p>

      <h2>Contact me</h2>
      <ul>
        {contactOptions.map(([platform, link]) => (
          <li key={platform}>
            <strong>{platform}:</strong> {link}
          </li>
        ))}
      </ul>

      <h2>Products</h2>
      <div className="products-list">
        {products.map(product => (
          <ProductTile key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
