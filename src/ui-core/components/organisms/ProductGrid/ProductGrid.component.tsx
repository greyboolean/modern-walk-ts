import Card from "../../../../components/Card/Card";
import styles from "./ProductGrid.module.css";
import { ProductGridProps } from "./ProductGrid.types";

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
