// import { useEffect, useState } from "react";
// import { getStoredCart } from "../../utility/productDb";

// export const productsAndCartData = async () => {
// 	// const productsData =await fetch("https://fakestoreapi.com/products")
// 	// const products = await productsData.json()
// 	// console.log(products);
// 	// eslint-disable-next-line react-hooks/rules-of-hooks
// 	const [products, setProducts] = useState([]);
// 	// eslint-disable-next-line react-hooks/rules-of-hooks
// 	useEffect(() => {
// 		// Fetch products data
// 		fetch("https://fakestoreapi.com/products")
// 			.then((response) => response.json())
// 			.then((data) => setProducts(data))
// 			.catch((error) => console.error("Error fetching products:", error));
// 	}, []);

// 	const saveCart = getStoredCart();
// 	const intialCart = [];
// 	for (const id in saveCart) {
// 		const foundProduct = products.find((prod) => prod.id === id);

// 		if (foundProduct) {
// 			const quantity = saveCart[id];
// 			foundProduct.quantity = quantity;
// 			intialCart.push(foundProduct);
// 		}
// 	}
// 	return { products, intialCart };
// };
