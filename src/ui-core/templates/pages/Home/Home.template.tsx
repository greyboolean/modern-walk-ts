import useProducts from "../../../../hooks/useProducts";
import { Section } from "../../../components";
import { ProductGrid } from "../../../components";
import { CategoryGrid } from "../../../components";

function Home() {
	const { products, loading } = useProducts();

	return (
		<div>
			<Section heading="Flash Sale" loading={loading}>
				<ProductGrid products={products.slice(0, 4)} />
			</Section>
			<Section heading="Categories">
				<CategoryGrid />
			</Section>
		</div>
	);
}

export default Home;
