import React, { useContext, useState } from "react";
import ProductCard from "./ProductCard";
import { CartContext, ProductContext } from "../CartContext/CartContext";
import { addToDb } from "../../utility/productDb";


// import { useCartContext } from "../CartContext/CartProvider";


const Products = () => {
    const products= useContext(ProductContext)
    
    // const { addProductToCart } = useCartContext()
    // console.log(products);

	// const [products, setProducts] = useState([]);
    const [cart,setCart] = useState(CartContext)

    console.log(cart);

	if (products.length === 0) {
		return <div>Loading...</div>;
	}

    const handleAddToCart = (product) =>{
        let newCart = []
        const exists = cart.find(existingProduct =>existingProduct.id === product.id)
        if(!exists){
            product.quantity = 1
            newCart= [...cart,product]
        }
        else{
            const rest = cart.filter(existingProduct =>existingProduct.id !== product.id)
            exists.quantity = exists.quantity + 1
            newCart = [...rest, exists]
        }

        setCart(newCart)
        addToDb(product.id)
        // toast.success('product added !', {autoClose : 500})
        

    }

    // const handleAddToCart = product =>{
    //     const exists = cart.find(prod =>prod.id === product.id)
    //     if(exists){
    //         alert('product already added')
    //     }
    //     else{
    //         const newCart= [...cart,product]
    //         setCart(newCart)
    //     }
    // }
 
	return (
		<div>
			<div className="flex gap-3 my-10">
				<button className="btn rounded-full bg-slate-100">Product Type</button>
				<button className="btn rounded-full bg-slate-100">Price</button>
				<button className="btn rounded-full bg-slate-100">Review</button>
				<button className="btn rounded-full bg-slate-100">Color</button>
				<button className="btn rounded-full bg-slate-100">Material</button>
				<button className="btn rounded-full bg-slate-100">Offer</button>
				<button className="btn rounded-full bg-slate-100">All filters</button>
				<div className="justify-end">
					<button className="btn rounded-full bg-teal-900 text-white hover:bg-teal-700 focus:bg-teal-300">Sort by</button>
				</div>
			</div>
			<div className="my-20">
				<h1 className="text-3xl font-bold my-7">Choose Product for you</h1>
				<div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{products.map((product) => (
						<ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart}></ProductCard>
					))}
				</div>
			</div>
            
		</div>
	);
};

export default Products;
