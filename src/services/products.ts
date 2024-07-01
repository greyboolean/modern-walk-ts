import axios from "axios";
import { Product } from "../models/product";

/*
export const getAllProducts = async (): Promise<Product[] | null> => {
	try {
		const response = await axios.get(`https://fakestoreapi.com/products`);
		// if (response.status === 200) {
		// 	return response.data.filter(
		// 		(product: Product) =>
		// 			product.category === "men's clothing" ||
		// 			product.category === "women's clothing"
		// 	);
		// }
		return response.data.filter(
			(product: Product) =>
				product.category === "men's clothing" ||
				product.category === "women's clothing"
		);
	} catch (error) {
		return null;
	}
};

export const getProductsByCategory = async (
	category: string
): Promise<Product[] | null> => {
	try {
		const response = await axios.get(
			`https://fakestoreapi.com/products/category/${
				category === "men" ? "men's%20clothing" : "women's%20clothing"
			}`
		);
		// if (response.status === 200) {
		// 	return response.data;
		// }
		return response.data;
	} catch (error) {
		return null;
	}
};
*/

export const getAllProducts = async (): Promise<Product[]> => {
	const response = await axios.get(`https://fakestoreapi.com/products`);
	return response.data.filter(
		(product: Product) =>
			product.category === "men's clothing" ||
			product.category === "women's clothing"
	);
};

export const getProductsByCategory = async (
	category: string
): Promise<Product[]> => {
	const response = await axios.get(
		`https://fakestoreapi.com/products/category/${
			category === "men" ? "men's%20clothing" : "women's%20clothing"
		}`
	);
	return response.data;
};
