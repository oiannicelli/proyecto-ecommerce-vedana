import React, { useContext } from 'react';
import {CartContext} from "../../context/cartContext";

const Cart = () => {
  const {cartList} = useContext(CartContext);

  return (
    <>
      <div>
        <ul>
          {cartList.map(({ objetItem }) => (
            <li>
              <h3>Nombre del producto: {objetItem.name}</h3>
              <h3>Categoria: {objetItem.category}</h3>
              <img src={objetItem.image} className="img-size-productos" alt="image of product" />
            </li>
          )
          )}
        </ul>
    </div>
    </>
  )
};

export default Cart;