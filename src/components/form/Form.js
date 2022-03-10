import { useState, useContext } from "react";
import { addDoc, collection, doc, getFirestore, writeBatch } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import form from "../../assets/img/form.jpg";

const MyForm = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    const [show, setShow] = useState(true);

    const buyer = {
        name: name,
        phone: phone,
        email: email,
        address: address,
    };

    const [orderId, setOrderId] = useState(null);
    
    const { items, totalSum, emptyCart } = useContext(CartContext);

    const sendOrder = (e) => {
        e.preventDefault();
        setShow(false);
        const db = getFirestore();
        const orderCollection = collection(db, 'orders');
        const order = { buyer, totalSum, items };
        addDoc(orderCollection, order).then(({ id }) => setOrderId(id));
        const batch = writeBatch(db);
        items.forEach(item => {
            const itemRef = doc(db, "items", item.id);
            batch.update(itemRef, { stock: item.stock - item.quantity });
        });
        batch.commit();
        emptyCart();
    };


    return (
        <div className="title">
            <div >
                <img
                    src={form}
                    width="800"
                    height="auto"
                />
            </div>
            {show ? (
                <div>
                    <h2>Finaliza tu compra completando tus datos</h2>
                    <form className="my-form">
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                        <label htmlFor="phone">Teléfono:</label>
                        <input type="text" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="address">Dirección:</label>
                        <input type="text" className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                        <button onClick={sendOrder} type="submit">Enviar</button> 
                    </form>
                </div> ) : ( null )}
            {orderId ? ( <h2> ¡Pedido realizado! <p>Pronto recibiras un mail con el detalle</p> </h2>) : ( null )}
        </div>
    );
};

export default MyForm;