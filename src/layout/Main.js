import React, { useEffect, useState } from "react";
import Nav from "../components/Nav/Nav";
import { Outlet } from "react-router-dom";
import {
	CartContext,
	ProductContext,
} from "../components/CartContext/CartContext";

const Main = () => {
	// const { products, intialCart } = useLoaderData();
	const [products, setProducts] = useState([]);
	// const [cart, setCart] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		// Fetch products data
		fetch("https://fakestoreapi.com/products")
			.then((response) => response.json())
			.then((data) => setProducts(data))
			.catch((error) => console.error("Error fetching products:", error));

		// Fetch initial cart data
		fetch("https://fakestoreapi.com/products")
			.then((response) => response.json())
			.then((data) => setCart(data))
			.catch((error) => console.error("Error fetching cart:", error));
	}, []);

	return (
		<div>
			<ProductContext.Provider value={products}>
				<CartContext.Provider value={[cart, setCart]}>
					<Nav></Nav>
					<Outlet></Outlet>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
};

export default Main;
