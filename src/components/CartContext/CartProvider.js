// components/CartContext.js

import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      // If the product already exists in the cart, update the quantity
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // If the product does not exist in the cart, add it with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const addProductToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  const getTotalPrice = () => {
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    return totalPrice.toFixed(2); // Rounded to two decimal places
  };

  const productInfo = {
    cart, addProductToCart, addToCart, updateQuantity, getTotalPrice
  }

  return (
    <CartContext.Provider value={productInfo}>
      {children}
    </CartContext.Provider>
  );
};
