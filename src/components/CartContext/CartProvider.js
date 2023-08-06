// ProductContext.js
import { createContext, useContext, useState, useEffect } from 'react';

export const ProductContext = createContext();
export const CartContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch products data from the API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <ProductContext.Provider value={products}>
      <CartContext.Provider value={[cart, setCart]}>{children}</CartContext.Provider>
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductContext);
};

export const useCart = () => {
  return useContext(CartContext);
};
