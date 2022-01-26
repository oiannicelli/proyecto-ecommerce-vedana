// COMPONENTE CONTENEDOR - DE FUNCION

import Item from '../item/item';
import { useState } from "react";

// array de items
const items = [
    {id: "1", name: "iPhone X", price: "999.99", createdBy: "Apple"},
    {id: "2", name: "iPhone XS", price: "888.99", createdBy: "Apple"},
    {id: "3", name: "Galaxy Note", price: "888.00", createdBy: "Samsung"},
    {id: "4", name: "Redmi Note 8", price: "300.00", createdBy: "Xiaomi"},
];

const ItemListContainer = () => {

    // 1° creo una primera funcion que selecciona productos:
    // parametro "selectedItem" es la propiedad que vamos a mostrar.
    // parametro "setSelectedItem" es la función que vamos a mostrar.
    // useState: me permite controlar el estado del contenedor, de la propiedad y la funcion.
    const [selectItem, setSelectedItem] = useState (null);

  return (
    <div>
        <h1>Lista de productos</h1>
        <h3>Producto seleccionado</h3>
        <p>{selectItem ? selectItem.name : 'Ninguna'}</p>
        <p>{selectItem ? selectItem.price : 'Ninguna'}</p>
        <p>{selectItem ? selectItem.id : 'Ninguna'}</p>
        <hr />
        {items.map( ({id, name, price}) => (
            <Item
                key={id}
                id={id}
                name={name}
                price={price}
                setSelectedItem={setSelectedItem}
            />
        ))}
    </div>
  );
};

export default ItemListContainer;

// las {} nos permiten hacer un corte y agregar JS puro
// map: metodo que hace iterar a cada uno de los objetos del array
// el sprit "...item" se utiliza solo cuando se que toda la informacion completa se puede enviar