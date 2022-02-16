import React, { useContext } from 'react';
import {CartContext} from "../../context/cartContext";

const Cart = () => {
  const {items} = useContext(CartContext);

  return (
    <>
      <div>
        <ul>
          {items.map(({ item }) => (
            <li>
              <h3>Nombre del producto: {item.name}</h3>
              <h3>Categoria: {item.category}</h3>
              <img src={item.image} className="img-size-productos" alt="image of product" />
            </li>
          )
          )}
        </ul>
    </div>
    </>
  )
};

export default Cart;