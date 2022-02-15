import { Link } from "react-router-dom";


const Item = ({ id, name, description, image }) => {


  return (
    <>
      <div>
        <h2>Nombre del producto: {name}</h2>
        <h2>Descripción del producto: {description}</h2>
        <img src={image} alt="image of product" />
        <br />
        <Link to={`/item/${id}`}>Seleccionar producto</Link>
      </div>
      <hr />
    </>
  );
};

export default Item;