/* import { doc, getDoc, getFirestore } from "firebase/firestore";
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

export default Item; */

import React from 'react';
import { Link } from 'react-router-dom';
import "./item.css";

const Item = ({product}) => {
  return (
      <div className="col-12 col-sm-12 col-md-6 col-lg-4">

          <div key={product.id} className="card mt-3 mb-3 m-auto cardItem  ">
                      <div className="card-header">
                          <h5 className="card-title text-center">{product.name}</h5>
                      </div>
                      <div className="card-body">
                          <img src={product.image} className="card-img-top w-50" alt="imagen del producto" />
                          <p className="card-text">
                          El artículo puede diferir de la imagen. Tenga en cuenta que el pedido se realiza por el nombre del producto.
                          </p>
                      </div>
                      <div className="card-footer"> 
                          <Link to={`/item/${product.id}`} >
                          <button
                              className="btn btn-outline-primary btn-block "
                          >
                              Ver Producto
                          </button>
                          </Link>
                      </div>
          </div>

      </div>
  )
}

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