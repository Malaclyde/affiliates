import { getProducts, getProductById } from '@/lib/data';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    const products = getProducts();
    return products.map(product => ({
        id: product.id,
    }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = getProductById(id);

    if (!product) {
        notFound();
    }

    return (
        <main>
            <h1>{product.name}</h1>
            <p className="description">{product.description}</p>

            <h2>Click below to get it:</h2>
            {/* 
        This is the raw affiliate link. UTM parameters should NOT be attached to this,
        as explicitly described in the requirements. 
      */}
            <a href={product.url} className="button" target="_blank" rel="noopener noreferrer">
                Get {product.name}
            </a>
        </main>
    );
}
