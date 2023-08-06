import React from "react";
import Nav from "../components/Nav/Nav";
import { Outlet } from "react-router-dom";

import { ProductProvider } from "../components/CartContext/CartProvider";
import Footer from "../components/Footer/Footer";

const Main = () => {
	return (
		<div>
			<ProductProvider>
				<Nav></Nav>
				<Outlet></Outlet>
				<Footer></Footer>
			</ProductProvider>
		</div>
	);
};

export default Main;
