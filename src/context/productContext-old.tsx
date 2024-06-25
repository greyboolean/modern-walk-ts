import { createContext, useContext, useEffect, useState } from "react";
import {
	ProductContextType,
	ProductProviderProps,
} from "./watchlist/watchlistContext.types";
import { Product } from "../models/product";
import { useUser } from "@clerk/clerk-react";

const ProductContext = createContext<ProductContextType | null>(null);

function ProductProvider({ children }: ProductProviderProps) {
	const { user, isLoaded } = useUser();
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		if (isLoaded && user) {
			const storedProducts = localStorage.getItem(`${user.id}`);
			if (storedProducts) {
				setProducts(JSON.parse(storedProducts));
			}
		}
	}, [isLoaded, user]);

	useEffect(() => {
		if (user) {
			localStorage.setItem(`${user.id}`, JSON.stringify(products));
		}
	}, [products, user]);

	function addProduct(product: Product) {
		setProducts([...products, product]);
	}

	function removeProduct(product: Product) {
		setProducts(products.filter((p) => p.id !== product.id));
	}

	function isInProductsList(product: Product) {
		return products.some((p) => p.id === product.id);
	}

	function toggleProduct(product: Product) {
		if (isInProductsList(product)) {
			removeProduct(product);
		} else {
			addProduct(product);
		}
		console.log(products);
	}

	return (
		<ProductContext.Provider
			value={{
				products,
				/* addProduct, removeProduct,*/ isInProductsList,
				toggleProduct,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
}

function useProduct() {
	const context = useContext(ProductContext);

	if (!context) {
		throw new Error("useProduct must be used within a ProductProvider");
	}

	return context;
}

export { ProductProvider, useProduct };
