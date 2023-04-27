// import React, { useState } from "react";

// export const CartContext = React.createContext('');
// console.log(CartContext)
 
// const CartProvider =({Children})=>{

//     const [cart,setCart]=useState([])

//     const addProduct = (item,newQuantity,quantity) => {
//         const newCart = cart.filter(prod => prod.id !== item.id);
//         newCart.push{{...item, quantity: newQuantity}};
//         setCart(newCart)
//     };


//     const clearCart= () => setCart([])

//     const isInCart = (id) => cart.find(product=>product.id === id) ? true : false;

//     const removeProduct= (id) => setCart(cart.filter(product => product.id !==id))



//     return(
//         <CartContext.Provider value={{
//             clearCart,
//             isInCart,
//             removeProduct,
//         }}
        
//         >


//             {Children}
//         </CartContext.Provider>
//     );
// };

// export default CartProvider;
