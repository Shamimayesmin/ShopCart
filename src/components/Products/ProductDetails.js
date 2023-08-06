import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { CiDeliveryTruck} from "react-icons/ci";
import { MdOutlineAssignmentReturn } from "react-icons/md";
const ProductDetails = () => {
	const data = useLoaderData();
	const { title, category, description, image, price, rating } = data;
	console.log(data);
	return (
		<div
			className="border-[none] borderwid w-[75%] mx-auto rounded-xl my-11 shadow-xl"
			style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
		>
			<div className="container px-5 py-20 mx-auto" style={{ cursor: "auto" }}>
				<div className="lg:w-4/5 mx-auto flex flex-wrap">
					<img
						alt="ecommerce"
						className="lg:w-1/2 w-full lg:h-1/2 h-64 object-cover object-center rounded"
						src={image}
						style={{ cursor: "auto" }}
					/>
					<div
						className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0"
						style={{ cursor: "auto" }}
					>
						<h2
							className="text-sm title-font text-gray-500 tracking-widest"
							style={{ cursor: "auto" }}
						>
							{category}
						</h2>
						<h1
							className="text-gray-900 text-3xl title-font font-medium mb-1 mt-3"
							style={{ cursor: "auto" }}
						>
							{title}
						</h1>
						<p className="leading-relaxed mt-3">{description}</p>

						<div className="flex mb-4">
							<span className="flex items-center mt-2">
								<svg
									fill="currentColor"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-4 h-4 text-amber-500"
									viewBox="0 0 24 24"
								>
									<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
								</svg>
								<svg
									fill="currentColor"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-4 h-4 text-amber-500"
									viewBox="0 0 24 24"
								>
									<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
								</svg>
								<svg
									fill="currentColor"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-4 h-4 text-amber-500"
									viewBox="0 0 24 24"
								>
									<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
								</svg>
								<svg
									fill="currentColor"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-4 h-4 text-amber-500"
									viewBox="0 0 24 24"
								>
									<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
								</svg>
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-4 h-4 text-amber-500"
									viewBox="0 0 24 24"
								>
									<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
								</svg>
								<span className="text-gray-600 ml-3">{rating.rate}</span>
							</span>
						</div>
						<hr />
						<div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-2">
							<div className="ml-3 items-center">
								<span className="mr-3 title-font font-medium text-2xl text-gray-900">
									${price}/Month
								</span>
								<p className="text-xs">
									Suggested payment with 6 months special financing
								</p>
							</div>
						</div>
						<div className="flex items-center pb-3 border-b-2 border-gray-100 mb-3">
							<div className="ml-5 items-center">
								<p className="text-xl font-medium mb-3">Choose color</p>
								<input type="color" />
							</div>
						</div>
						<div className="flex items-center pb-3 mb-3">
							<div className="ml-5 items-center">
								<button className="text-2xl font-medium bg-slate-100 p-3 rounded-full">
									-
								</button>
								<span className="text-2xl font-medium ml-2 bg-slate-100 p-3 rounded-xl">
									1
								</span>
								<button className="text-2xl font-medium ml-2 bg-slate-100 p-3 rounded-full">
									+
								</button>
								<span className="text-xs ml-4">
									Only <span className="text-amber-500">3 items</span> left !
									Don't miss it
								</span>
							</div>
						</div>
						<div className="flex mb-5">
							<Link className="flex ml-auto text-white bg-teal-700 border-0 py-2 px-8 focus:outline-none hover:bg-teal-500 rounded-full">
								Buy Now
							</Link>

							<Link className="flex font-medium ml-auto text-teal-700 bg-base-100 border-2 py-2 outline-2 border-emerald-800 px-6 focus:bg-emerald-700 focus:text-white rounded-full">
								Add to cart
							</Link>
						</div>

						<div className="flex items-center pb-3 border-2 border-b-2 border-gray-100 mt-3">
							<div className="ml-5 items-center">
								<span className="flex items-center">
									<CiDeliveryTruck className="text-amber-500 text-2xl font-bold"/>
									<span className="text-xl font-medium mb-1 mt-1 ml-2">
										Free delivary
									</span>
								</span>

								<p className="text-xs underline ml-7">
									Enter your postal code for Delivary Availablity
								</p>
							</div>
						</div>
						<div className="flex items-center pb-3 border-2 border-t-0 border-gray-100 mb-3">
							<div className="ml-5 items-center">
                            <span className="flex items-center">
									<MdOutlineAssignmentReturn className="text-amber-500 text-xl font-medium"/>
									<span className="text-xl font-medium mb-1 mt-1 ml-2">
                                    Return delivary
									</span>
								</span>
								
								<p className="text-xs ml-7">
									Free 30 days delivery return.{" "}
									<span className="underline">Details</span>{" "}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
