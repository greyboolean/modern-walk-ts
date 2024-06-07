import Card from "../Card/Card";
import styles from "./ProductGrid.module.css";

interface Product {
	id: number;
	title: string;
	price: number;
	category: string;
	description: string;
	image: string;
}

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
