import React, { useState } from "react";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import ItemCart from "../components/itemCart/ItemCart";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () => {
  const { cart, totalPrice, clearCart } = useCartContext();

  const [orderId, setOrderId] = useState(null);

  const order = {
    items: cart.map((producto) => ({
      id: producto.id,
      title: producto.utensil,
      price: producto.price,
      quantity: producto.quantity,
    })),
    total: totalPrice(),
  };

  const handleCompra = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order)
      .then(({ id }) => {
        console.log(id);
        setOrderId(id);
        clearCart();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <h1>Carrito</h1>
      {orderId ? (
        <p>
          Orden creada con éxito. Su código de orden es {orderId}.
        </p>
      ) : (
        <>
          {cart.length === 0 ? (
            <>
              <p>No hay elementos en el carrito</p>
              <Link to="/">
                <Button>Hacer Compras</Button>
              </Link>
            </>
          ) : (
            <>
              {cart.map((producto) => (
                <ItemCart key={producto.id} producto={producto} />
              ))}
              <p>Total: {totalPrice()}</p>
              <Button onClick={handleCompra}>Terminar compra</Button>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Cart;