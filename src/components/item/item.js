import { useState } from "react";
import Counter from "../itemCount/counter";

const Item = ( { id, name, description, image, stock, setSelectedItem }) => {

  const [stockSelected, setStockSelected] = useState(0);

  const selectedItem = () => setSelectedItem({ id, name, description, image, stock: stockSelected });

  return (
    <>
      <div>
        <h2>Nombre producto: {name}</h2>
        <h2>Descripción del producto: {description}</h2>
        <img src={image} alt="image of product" />
        <h1>Cuadro Lirios</h1>
        <Counter stock={stock} setStockSelected={setStockSelected} />
        <button onClick={ selectedItem }>Seleccionar producto</button>
      </div>
      <hr />
    </>
  );
};

export default Item;