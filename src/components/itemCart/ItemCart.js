import React from 'react';
import { useCartContext } from '../../context/CartContext';
import './ItemCart.css';

const Cart = ({producto}) => {
    const {removeProduct} = useCartContext();
    return (

      <div className='itemCart'>

            <img src={producto.img} alt={producto.utensil}></img>
            <div>
                <p>Producto: {producto.utensil}</p>
                <p>Cantidad {producto.quantity}</p>
                <p>Precio: {producto.price}</p>
                <p>Subtotal: $ {producto.quantity * producto.price}</p>
                <button onClick={() => removeProduct(producto.id)}>Eliminar</button>

            </div>
        
        </div>
    )

}

export default Cart