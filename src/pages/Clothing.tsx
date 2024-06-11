import useProducts from "../hooks/useProducts";
import { toTitleCase } from "../utils/utils";
import Section from "../components/Section/Section";
import ProductGrid from "../components/ProductGrid/ProductGrid";

type ClothingProps = {
	category: string;
};

function Clothing({ category }: ClothingProps) {
	const { products, loading } = useProducts(category);

	return (
		<div>
			<Section
				heading={`${toTitleCase(category)}'s Clothing`}
				loading={loading}
			>
				<ProductGrid products={products} />
			</Section>
		</div>
	);
}

export default Clothing;
