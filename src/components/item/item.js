// COMPONENTE DE PRESENTACION - solo muestra la informacion

// ItemCounter
import { useState } from "react";
import Counter from "../itemCount/counter";


const Item = ( { id, name, description, stock, setSelectedItem }) => {

  // Creo una funcion para modificar el numero de stock selecionado:
  const [stockSelected, setStockSelected] = useState(0);

  // creo una funcion que llame por referencia al parametro "setSelectedItem" para selecionar el producto y mostrar la informacion + creo un objeto "{id, name, description, stock: stockSelected }"
  const selectItem = () => setSelectedItem({ id, name, description, stock: stockSelected });

  return (
    <>
      <div>
        <h2>Nombre producto: {name}</h2>
        <h2>Descripción del producto: {description}</h2>
        <h1>Cuadro Lirios</h1>
        <Counter stock={stock} setStockSelected={setStockSelected} />
        <button onClick={ selectItem }>Seleccionar producto</button>
      </div>
      <hr />
    </>
  );
};

export default Item;
