import { useState, useEffect } from "react";
import { getProductsByCategory, getAllProducts } from "../services/products";
import { Product } from "../models/product";

function useProducts(category?: string) {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProducts = async () => {
			const products = category
				? await getProductsByCategory(category)
				: await getAllProducts();
			if (products) {
				setProducts(products);
				setLoading(false);
			}
		};

		fetchProducts();
	}, [category]);

	return { products, loading };
}

export default useProducts;
