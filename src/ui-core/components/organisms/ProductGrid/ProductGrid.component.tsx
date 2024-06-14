import { ProductCard } from "../../molecules";
import { ProductGridProps } from "./ProductGrid.types";
import styles from "./ProductGrid.module.css";

function ProductGrid({ products }: ProductGridProps) {
	return (
		<div className={styles.grid}>
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
}

export default ProductGrid;
