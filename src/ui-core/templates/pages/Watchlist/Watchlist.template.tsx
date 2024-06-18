import { useProduct } from "../../../../context/productContext";
import { ProductGrid, Section } from "../../../components";

function Watchlist() {
	const { products } = useProduct();
  console.log(products);

	return (
		<div>
			<Section heading="Watchlist">
				<ProductGrid products={products} />
			</Section>
		</div>
	);
}

export default Watchlist;
