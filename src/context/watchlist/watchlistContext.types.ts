import { Product } from "../../models/product";

export type WatchlistContextType = {
	watchlist: Product[];
	/*addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;*/
	isInWatchlist: (product: Product) => boolean;
	toggleProduct: (product: Product) => void;
};

export type WatchlistProviderProps = {
	children: React.ReactNode;
};
