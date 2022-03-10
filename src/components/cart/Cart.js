import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';

const Cart = () => {
    const { items, removeItem, emptyCart, increaseQuantity, decreaseQuantity, totalSum } = useContext(CartContext);

    return (
        <div>
            {items.length > 0 ? (
                <div className="cart-items">
                    <ul>
                        {items.map(item => (
                            <li key={item.id}>
                                {item.name} -
                                $ {item.price} x
                                 {item.quantity} =
                                $ {item.price * item.quantity}
                                
                                <button className="btn-cart" onClick={() => decreaseQuantity(item)}>
                                -
                                </button>
                                <button className="btn-cart" onClick={() => increaseQuantity(item)}>
                                +
                                </button>
                                <button className="btn-delete" onClick={() => removeItem(item)}>
                                    Eliminar
                                </button>
                            </li>
                        ))}
                    </ul>
                    <h3>Total = $ {totalSum}</h3>

                    <Link to= '/form'>
                        <button className="btn-buy">Finalizar compra</button>
                    </Link>

                    <button className="btn-cart" onClick={emptyCart}>Vaciar carrito</button>
                </div>
            ) : (
                <div className="cart-items">
                    <h3>El carrito se encuentra vacio</h3>
                    <Link to='/'><button className="btn-cart">Seguir comprando</button></Link>
                </div>
                )
            }
        </div>
    );
};

export default Cart;