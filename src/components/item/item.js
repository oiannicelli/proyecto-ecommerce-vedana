import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./item.css";

const Item = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const db = getFirestore();

    const docRef = doc (db, "items", "wfrmHD80iEchSWXNUhAz");

    getDoc(docRef).then((snapshot) => {
      setProduct({
        id: snapshot.id,
        ...snapshot.data()
      });
    });
  }, []);
  

  return (
    <>
      <div>
        <h3>Nombre del producto: {product.name}</h3>
        <h3>Descripción del producto: {product.description}</h3>
        <img src={product.image} className="img-size-productos" alt="image of product" />
        <br />
        <Link to={`/item/${product.id}`}>Seleccionar producto</Link>
      </div>
      <hr />
    </>
  );
};

export default Item;



/* const Item = ({ id, name, description, image }) => {

  return (
    <>
      <div>
        <h3>Nombre del producto: {name}</h3>
        <h3>Descripción del producto: {description}</h3>
        <img src={image} className="img-size-productos" alt="image of product" />
        <br />
        <Link to={`/item/${id}`}>Seleccionar producto</Link>
      </div>
      <hr />
    </>
  );
};

export default Item; */