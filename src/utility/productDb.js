const addToDb= (id) =>{
    let productCart = {};
    const storedCart = localStorage.getItem("product-cart");
    if(storedCart){
        productCart = JSON.parse(storedCart)
    }

    // add quantity
    const quantity = productCart[id]
    if(quantity){
        const newQuantity = quantity +1;
        productCart[id] = newQuantity;
    }else{
        productCart[id] = 1;
    }
    localStorage.setItem('product-cart', JSON.stringify(productCart))
}

const getStoredCart = () => {
    let productCart = {};
  
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem("product-cart");
    if (storedCart) {
        productCart = JSON.parse(storedCart);
    }
    return productCart;
  };

export {addToDb,getStoredCart}