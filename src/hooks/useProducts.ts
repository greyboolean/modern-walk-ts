// import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProductsByCategory, getAllProducts } from "../services/products";
// import { Product } from "../models/product";

/*
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
*/

function useProducts(category?: string) {
	// const fetchProducts = async () => {
	// 	if (category) {
	// 		return getProductsByCategory(category);
	// 	} else {
	// 		return getAllProducts();
	// 	}
	// };
	const fetchProducts = async() => category ? getProductsByCategory(category) : getAllProducts();

	const { data: products, isLoading } = useQuery({
		queryKey: ["products", category],
		queryFn: fetchProducts,
	});

	return { products: products ?? [], isLoading };
}

export default useProducts;
