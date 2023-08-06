import React from "react";
import ProductCard from "./ProductCard";

import { useCart, useProducts } from "../CartContext/CartProvider";
import { toast } from "react-hot-toast";

const Products = () => {
	// context to mange state
	const products = useProducts();
	const [cart, setCart] = useCart();

	// loader
	if (products.length === 0) {
		return (
			<div className="w-28 mx-auto mt-8">
				<span className="loading loading-spinner text-primary"></span>
			</div>
		);
	}

	// add item in the cart
	const handleAddToCart = (product) => {
		const existingCartItem = cart.find((item) => item.id === product.id);
		if (existingCartItem) {
			const updatedCart = cart.map((item) =>
				item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
			);
			setCart(updatedCart);
		} else {
			setCart([...cart, { ...product, quantity: 1 }]);
		}
		toast.success("product added !", { autoClose: 500 });
	};

	return (
		<div>
			<div className="flex gap-3 my-10">
				<button className="btn rounded-full bg-slate-100">Review</button>
				<button className="btn rounded-full bg-slate-100">Color</button>
				<button className="btn rounded-full bg-slate-100">Material</button>
				<button className="btn rounded-full bg-slate-100">Offer</button>
				<button className="btn rounded-full bg-slate-100">All filters</button>
				<div className="justify-end">
					<button className="btn rounded-full bg-teal-900 text-white hover:bg-teal-700 focus:bg-teal-300">
						Sort by
					</button>
				</div>
			</div>
			<div className="my-20">
				<h1 className="text-3xl font-bold my-7 ml-16">
					Choose <span className="border-b-4 border-teal-600">Product for you</span>
				</h1>
				<div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-10 gap-x-2">
					{products?.map((product) => (
						<ProductCard
							key={product.id}
							product={product}
							handleAddToCart={handleAddToCart}
						></ProductCard>
					))}
				</div>
			</div>
		</div>
	);
};

export default Products;
