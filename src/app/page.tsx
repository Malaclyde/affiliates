import { getAboutMe, getProducts } from '@/lib/data';
import ProductTile from '@/components/ProductTile';
import Link from 'next/link';

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

      <h2>Blog</h2>
      <p className="description">
        Tips, guides, and insights on sleep, health, and wellness.{' '}
        <Link href="/blog" style={{ color: '#0066cc' }}>
          Read the blog →
        </Link>
      </p>
    </main>
  );
}
