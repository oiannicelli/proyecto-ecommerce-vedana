import { Link } from 'react-router-dom';
import ItemCount from '../../item-count/ItemCount';
import { useContext, useState } from 'react';
import { CartContext } from '../../../context/CartContext';

const ItemDetail = ( {product}) => {
    const { name, description, price, stock, image } = product
    const [show, setShow] = useState(true)
    const { addItem } = useContext(CartContext)

    const onAdd = ( counter ) => {
        addItem({ ...product, quantity: counter })
        setShow(false)
    }

    return (
        <div>
            <div className="detail-layout">
                <img
                    src={image}
                    width="400"
                    height="auto"
                    alt={name}
                />
                <div className="detail-info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <h3>$ {price}</h3>
                    <p>{stock} en stock</p>
                    {stock > 0 ?
                    show ? <ItemCount stock={stock} onAdd={onAdd} /> : 
                        <div className="detail-btns">
                            <Link to='/'><button className="btn-detail">Continuar Comprando</button></Link>
                            <Link to='/cart'><button className="btn-detail">Terminar de comprar</button></Link>
                        </div> : 
                    <p>Sin stock</p> }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;