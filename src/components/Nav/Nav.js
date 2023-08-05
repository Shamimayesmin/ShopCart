import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';


const Nav = () => {

    const [cart,setCart] = useContext(CartContext);
    
    const {addProductToCart} = useContext(CartContext)


    // const { cart, updateQuantity, getTotalPrice } = useContext(CartContext);

//   const handleQuantityChange = (productId, newQuantity) => {
//     updateQuantity(productId, newQuantity);
//   };
    // const handleRemoveToCart = (id)=>{

    // }

    return (
        <div className="navbar bg-base-100">
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
                    <li>
                        <Link>Item 1</Link>
                    </li>
                    <li>
                        <a href="/">Parent</a>
                        <ul className="p-2">
                            <li>
                                <a href="/">Submenu 1</a>
                            </li>
                            <li>
                                <a href="/">Submenu 2</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="/">Item 3</a>
                    </li>
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
            <ul className="menu menu-horizontal px-1">
                <li>
                    <a href="/">Item 1</a>
                </li>
                <li tabIndex={0}>
                    <details>
                        <summary>Parent</summary>
                        <ul className="p-2">
                            <li>
                                <a href="/">Submenu 1</a>
                            </li>
                            <li>
                                <a href="/">Submenu 2</a>
                            </li>
                        </ul>
                    </details>
                </li>
                <li>
                    <a href="/">Item 3</a>
                </li>
            </ul>
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
                        <span className="badge badge-sm indicator-item">0</span>
                    </div>
                </label>
                <div
                    tabIndex={0}
                    className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                    <div className="card-body">
                        <span className="font-bold text-lg">{cart.length}</span>

                        <span className="text-info">Name</span>
                        <span className="text-info">Price</span>
                        <span className="text-info">Subtotal: $999</span>
                        <div className="card-actions">
                            <button className="btn btn-primary btn-block">
                                View cart
                            </button>
                        </div>
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