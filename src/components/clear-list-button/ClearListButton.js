import React from 'react';
import { CartContext } from '../../context/cartContext';

const ClearListButton = () => {
    const { clearList } = CartContext();
    return (
        <div className="col-6 col-sm-6 col-md-6 col-lg-6  mt-2 mb-2">
            <button
                type="button"
                className="btn btn-danger "
                onClick={() => clearList()}
            >
                Borrar carrito
            </button>
        </div>
    )
}

export default ClearListButton;