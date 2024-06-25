import { useWatchlist } from "../../../../context/watchlist/watchlistContext";
import { ProductGrid, Section } from "../../../components";

function Watchlist() {
	const { watchlist } = useWatchlist();

	return (
		<div>
			<Section heading="Watchlist">
				<ProductGrid products={watchlist} />
			</Section>
		</div>
	);
}

export default Watchlist;
