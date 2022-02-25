import React from 'react';
import { CartContext } from '../../context/cartContext';

const PriceTotal = () => {
    const { precioTotal, formatoMoneda } =
        CartContext();
    return (
        <div className="col-12 text-center  bg-success text-dark mt-2 mb-2 ">
            <h3 calssName="">{`Total a pagar :  ${formatoMoneda(
                precioTotal()
            )}`}</h3>
        </div>
    )
}

export default PriceTotal;