import React from "react";
import Nav from "../components/Nav/Nav";
import { Outlet } from "react-router-dom";

import { ProductProvider } from "../components/CartContext/CartProvider";

const Main = () => {
	return (
		<div>
			<ProductProvider>
				<Nav></Nav>
				<Outlet></Outlet>
			</ProductProvider>

			{/* <ProductContext.Provider value={products}>
				<CartContext.Provider value={[cart, setCart]}>
					<Nav></Nav>
					<Outlet></Outlet>
				</CartContext.Provider>
			</ProductContext.Provider> */}
		</div>
	);
};

export default Main;
