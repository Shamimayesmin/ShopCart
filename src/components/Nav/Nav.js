import React from "react";
import { Link } from "react-router-dom";

import { useCart } from "../CartContext/CartProvider";

const Nav = () => {
	const [cart, setCart] = useCart();
	

    // count total price of products
	const handleQuantityChange = (product, newQuantity) => {
		if (newQuantity > 0) {
			const updatedCart = cart.map((item) =>
				item.id === product.id ? { ...item, quantity: newQuantity } : item
			);
			setCart(updatedCart);
		}
	};

    // Remove an item form the cart
	const handleRemoveFromCart = (productId) => {
		const updatedCart = cart.filter((item) => item.id !== productId);
		setCart(updatedCart);
	};

    // get all price
	const getTotalPrice = () => {
		return cart.reduce((total, item) => total + item.price * item.quantity, 0);
	};

	const menuItems = (
		<>
			<li>
				<Link>Categories</Link>
			</li>
			<li>
				<Link>Deals</Link>
			</li>
			<li>
				<Link>What's New</Link>
			</li>
			<li>
				<Link>Delivery</Link>
			</li>
		</>
	);

	return (
		<div className="navbar bg-base-200 rounded-md">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						{menuItems}
					</ul>
				</div>
				<div>
					<img
						className="w-12 h-12 lg:block sm:hidden"
						src="https://indyme.com/wp-content/uploads/2020/11/shopping-cart-icon.png"
						alt=""
					/>
				</div>
				<Link className="btn btn-ghost normal-case text-xl text-teal-900 font-bold">
					Shopcart
				</Link>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">{menuItems}</ul>
			</div>

			<div className="navbar-end gap-2">
				<div className="form-control">
					<input
						type="text"
						placeholder="Search"
						className="input input-bordered w-24 md:w-auto"
					/>
				</div>
				{/* cart */}
				<div className="dropdown dropdown-end">
					<label tabIndex={0} className="btn btn-ghost btn-circle">
						<div className="indicator">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							</svg>
							<span className="badge badge-sm indicator-item">
								{cart.length}
							</span>
						</div>
					</label>
					<div
						tabIndex={0}
						className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
					>
						{/* //{cart.length} */}
						<div className="card-body">
							{cart.length === 0 ? (
								<p>Your cart is empty.</p>
							) : (
								<>
									{cart.map((item) => (
										<div key={item.id} className="cart-item flex">
											<button
												onClick={() => handleRemoveFromCart(item.id)}
												className="btn btn-xs mt-2 mr-2"
											>
												X
											</button>
											<div className="avatar">
												<div className="w-8 h-10 rounded">
													<img
														src={item.image}
														alt="Tailwind-CSS-Avatar-component"
													/>
												</div>
											</div>

											<div className="cart-item-info ml-3">
												<h3 className="text-xs">{item.title}</h3>
												<p className="text-xs">${item.price}</p>
												<input
													className="w-10"
													type="number"
													min="1"
													value={item.quantity}
													onChange={(e) =>
														handleQuantityChange(item, parseInt(e.target.value))
													}
												/>
											</div>
										</div>
									))}
									<p>Total: $ {getTotalPrice().toFixed(2)}</p>
									<button className="btn btn-info btn-block">View cart</button>
								</>
							)}
						</div>
					</div>
				</div>

				<div className="dropdown dropdown-end">
					<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
						<div className="w-10 rounded-full">
							<img
								src="https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black.png"
								alt="/"
							/>
						</div>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<a href="/" className="justify-between">
								Profile
								<span className="badge">New</span>
							</a>
						</li>
						<li>
							<a href="/">Settings</a>
						</li>
						<li>
							<a href="/">Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Nav;
