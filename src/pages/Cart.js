import React from "react";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import ItemCart from "../components/itemCart/ItemCart"
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    const order = {

        items: cart.map(producto => ({id:producto.id, title: producto.utensil, price: producto.price, quantity: producto.quantity})),
        total: totalPrice(),
    }

    const clickCompra=() =>{
        const db = getFirestore();

        const ordersCol = collection(db, 'orders');
        addDoc(ordersCol, order)
        .then(({id}) => console.log(id))

    };





    if (cart.length === 0) {
        return (
            <>
                <p>No hay elementos en el carrito</p>
                <Link to='/'>
                    <Button onClick={clickCompra()}>
                        Hacer Compras
                    </Button>
                    </Link>
            </>
        );
    }

    return(
        <>
            <h1>Carrito</h1>
            {
                cart.map(producto => <ItemCart key={producto.id} producto={producto} />)
            }
            <p>
                total: {totalPrice()}
            </p>
            <Button>Terminar compra</Button>
        </>
        


    )
}

export default Cart;