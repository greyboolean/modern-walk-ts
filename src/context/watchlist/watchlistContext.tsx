import { createContext, useContext } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Product } from "../../models/product";
import {
	WatchlistContextType,
	WatchlistProviderProps,
} from "./watchlistContext.types";

const WatchlistContext = createContext<WatchlistContextType | null>(null);

function WatchlistProvider({ children }: WatchlistProviderProps) {
	const [watchlist, setWatchlist] = useLocalStorage<Product[]>(
		"watchlist",
		[]
	);

	function addProduct(product: Product) {
		setWatchlist([...watchlist, product]);
	}

	function removeProduct(product: Product) {
		setWatchlist(watchlist.filter((p: Product) => p.id !== product.id));
	}

	function isInWatchlist(product: Product) {
		return watchlist.some((p: Product) => p.id === product.id);
	}

	function toggleProduct(product: Product) {
		if (isInWatchlist(product)) {
			removeProduct(product);
		} else {
			addProduct(product);
		}
	}

	return (
		<WatchlistContext.Provider
			value={{
				watchlist,
				/* addProduct, removeProduct,*/ isInWatchlist,
				toggleProduct,
			}}
		>
			{children}
		</WatchlistContext.Provider>
	);
}

function useWatchlist() {
	const context = useContext(WatchlistContext);

	if (!context) {
		throw new Error("useWatchlist must be used within a WatchlistProvider");
	}

	return context;
}

export { WatchlistProvider, useWatchlist };
