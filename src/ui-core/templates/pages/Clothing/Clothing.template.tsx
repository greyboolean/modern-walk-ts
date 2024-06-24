import useProducts from "../../../../hooks/useProducts";
import { toTitleCase } from "../../../../utils/utils";
import { Section, ProductGrid } from "../../../components";
import { ClothingProps } from "./Clothing.types";

function Clothing({ category }: ClothingProps) {
	const { products, isLoading } = useProducts(category);

	return (
		<div>
			<Section
				heading={`${toTitleCase(category)}'s Clothing`}
				loading={isLoading}
			>
				<ProductGrid products={products} />
			</Section>
		</div>
	);
}

export default Clothing;
