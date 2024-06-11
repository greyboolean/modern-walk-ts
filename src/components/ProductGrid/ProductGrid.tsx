import Card from "../Card/Card";
import { Product } from "../../types/product";
import styles from "./ProductGrid.module.css";

type ProductGridProps = {
	products: Product[];
}

function ProductGrid({ products }: ProductGridProps) {
	return (
		<div className={styles.grid}>
			{products.map((product) => (
				<Card key={product.id} product={product} />
			))}
		</div>
	);
}

export default ProductGrid;
