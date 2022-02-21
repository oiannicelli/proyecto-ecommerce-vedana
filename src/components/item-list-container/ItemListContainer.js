import "../item/item.css";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

const ItemListContainer = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const db = getFirestore();

    const itemCollection = collection (db, "items");

    getDocs(itemCollection).then((snapshot) => {
      setProducts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
      );
    });
  }, []);

  return (
    <div>
      <h1>Productos disponibles</h1>
      <hr />
      {products && 
        products.map(({ id, name, price, description, image }) => (
          <li key={id}>
            <p>Name: {name} </p>
            <p>Price: $ {price} </p>
            <p>Description: {description} </p>
            <img src={image} className="img-size-productos" alt="image of product" />
          </li>
          )
        )
      }
    </div>
  );
};

export default ItemListContainer;






/* import { useParams } from "react-router-dom";
import Item from "../item/item";
import useProducts from "../hooks/useProducts";

const ItemListContainer = () => {
  const { id } = useParams();
  const { products } = useProducts();

  const filterProducts = products.filter(({ category }) => category === id);

  return (
    <div>
      <h1>Lista de productos</h1>
      <hr />
      {!id &&
        products.map((product) => {
          if (product.id === "1") {
            
          }
          return <Item key={product.id} {...product} />;
        })}
      {id &&
        filterProducts.map((product) => {
          if (product.id === "1") {
            
          }
          return <Item key={product.id} {...product} />;
        })}
    </div>
  );
};

export default ItemListContainer; */