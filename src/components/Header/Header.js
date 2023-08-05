import React from "react";

import img from "../../images/slider-bg-removebg-preview.png";
const Header = () => {
	return (
		<div className="hero h-5/6 p-5 bg-orange-100">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<div className="w-1/2 mx-auto">
					<img
						src={img}
						className="max-w-2xl max-h-[400px] mb-[-35px] image-full rounded-lg bg-orange-100 "
						alt=""
					/>
				</div>
				<div className="w-1/2">
					<h1 className="text-5xl font-bold text-teal-800 py-2">
						Grab upto 50% off on selected Product
					</h1>
					<p className="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi.
					</p>
					<button className="btn bg-teal-800 rounded-full p-3 text-white hover:bg-teal-600">
						BUY NOW
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
