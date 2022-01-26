// ejemplo componente de presentación 
// en este caso es un componente basado en función

import React from "react";
import cartSVG from './cart.svg';
import "./CartIcon.css";

const CartIcon = () => {
  return (
    <div>
      <img className="cart-icon" src={cartSVG} alt="" />
    </div>
  )
};

export default CartIcon;

/* svg2jsx.com  - web para escribir el icono*/