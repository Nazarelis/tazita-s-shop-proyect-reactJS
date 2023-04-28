import React from "react";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import ItemCart from "../components/itemCart/ItemCart"

const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    if (cart.length === 0) {
        return (
            <>
                <p>No hay elementos en el carrito</p>
                <Link to='/'>
                    <Button>
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