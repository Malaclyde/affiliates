import { getAccounts, getAccountById, getProducts } from '@/lib/data';
import ProductTile from '@/components/ProductTile';
import TrackedLink from '@/components/TrackedLink';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    const accounts = getAccounts();
    return accounts.map(account => ({
        id: account.id,
    }));
}

export default async function AccountPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const account = getAccountById(id);

    if (!account) {
        notFound();
    }

    const allProducts = getProducts();
    const advertisedProducts = account.advertisedProducts
        .map(ap => allProducts.find(p => p.id === ap.id))
        .filter((p): p is typeof allProducts[0] => p !== undefined);

    return (
        <main>
            <div className="products-list">
                {advertisedProducts.map(product => (
                    <ProductTile key={product.id} product={product} />
                ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                <TrackedLink href="/" className="button">
                    See More
                </TrackedLink>
            </div>
        </main>
    );
}
