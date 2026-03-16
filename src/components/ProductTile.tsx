import TrackedLink from './TrackedLink';
import { Product } from '@/lib/types';

export default function ProductTile({ product }: { product: Product }) {
    return (
        <TrackedLink href={`/product/${product.id}`} className="product-tile">
            {product.thumbnail && (
                <img
                    src={product.thumbnail}
                    alt={product.name}
                    className="product-thumbnail"
                />
            )}
            <div className="product-tile-content">
                <h3>{product.name}</h3>
            </div>
        </TrackedLink>
    );
}
