import { Link } from "react-router-dom";
import "./item.css";

const Item = ({ id, name, description, image }) => {


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

export default Item;