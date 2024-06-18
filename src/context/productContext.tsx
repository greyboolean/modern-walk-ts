import { createContext, useContext, useState } from "react";
import {
	ProductContextType,
	ProductProviderProps,
} from "./productContext.types";
import { Product } from "../models/product";

const ProductContext = createContext<ProductContextType | null>(null);

function ProductProvider({ children }: ProductProviderProps) {
	const [products, setProducts] = useState<Product[]>([]);

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
			value={{ products, /* addProduct, removeProduct,*/ isInProductsList, toggleProduct }}
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
