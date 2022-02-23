import React from 'react';
import { CartProvider, useCartContext } from '../../context/CartContext';

const ClearListButton = () => {
    const { clearList } = useCartContext(CartProvider);
    return (
        <div>
            <button
                type="button"
                onClick={() => clearList()}
            >
                Borrar carrito
            </button>
        </div>
    )
}

export default ClearListButton;