import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, handleAddToCart}) => {
	const { image, id, description, price, title, rating } = product;
	// console.log(product);

	return (
		<div className="card max-w-xs mx-auto bg-base-100 shadow-md">
            {/* click image to see product details */}
			<Link to={`/details/${id}`}>
				<figure>
					<img src={image} alt="Shoes" className="h-52 w-52 my-2" />
				</figure>
			</Link>

            {/* product body */}
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
				{/* add to cart button */}
				<div className="justify-start">
					<button
						onClick={() => handleAddToCart(product)}
						className="btn rounded-full bg-teal-900 text-white hover:bg-teal-700 focus:bg-teal-300"
					>
						Add To Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
