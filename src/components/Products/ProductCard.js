import React from "react";

const ProductCard = ({ product,handleAddToCart }) => {
	const { image, description, price, title, rating } = product;
	console.log(product);

	// const { cart, setCart } = useContext(CartContext);

	return (
		<div className="card w-96 bg-base-100 shadow-xl">
			<figure>
				<img src={image} alt="Shoes" className="h-52 w-52 my-2" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					{title.slice(0, 15)}... <small></small>
					<div className="badge badge-secondary">${price}</div>
				</h2>

				<p className="leading-relaxed">
					{description.slice(0, 30)}
					.... <small className="cursor-pointer text-blue-600">
						see more
					</small>{" "}
				</p>

				{/* rating */}
				<div className="flex gap-2">
					<div>
						<div className="rating rating-xs">
							<input
								type="radio"
								name="rating-5"
								className="mask mask-star-2 bg-orange-400"
							/>
							<input
								type="radio"
								name="rating-5"
								className="mask mask-star-2 bg-orange-400"
								checked
							/>
							<input
								type="radio"
								name="rating-5"
								className="mask mask-star-2 bg-orange-400"
							/>
							<input
								type="radio"
								name="rating-5"
								className="mask mask-star-2 bg-orange-400"
							/>
							<input
								type="radio"
								name="rating-5"
								className="mask mask-star-2 bg-orange-400"
							/>
						</div>
					</div>
					<div>
						<p>({rating.rate})</p>
					</div>
				</div>
				{/* onClick={()=>handleAddToCart(product)} */}
				<div className="justify-start">
					<button onClick={()=>handleAddToCart(product)} className="btn rounded-full bg-teal-900 text-white hover:bg-teal-700 focus:bg-teal-300">
						Add To Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
