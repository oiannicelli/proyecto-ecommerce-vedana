import React, { useContext } from 'react';
import {CartContext} from "../../context/cartContext";

const Cart = () => {
  const {items} = useContext(CartContext);

  return (
    <>
      <h1>Cart</h1>
      <h1>{items}</h1>
    </>
  )
};

export default Cart;