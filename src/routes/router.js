import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import ProductDetails from "../components/Products/ProductDetails";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/details/:id",
				element: <ProductDetails></ProductDetails>,
				loader: ({ params }) =>
					fetch(`https://fakestoreapi.com/products/${params.id}`),
			},
		],
	},
]);
