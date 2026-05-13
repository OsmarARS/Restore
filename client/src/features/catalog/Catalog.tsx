import type { Product } from '../../app/models/product';
import ProductList from './ProductList';

type CatalogProps = {
  products: Product[];
};

export default function Catalog({ products }: CatalogProps) {
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}
