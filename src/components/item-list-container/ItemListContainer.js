// 

import { useEffect, useState } from "react";
import { productsAPI } from '../../helpers/promises';
import Item from '../item/item';



const ItemListContainer = () => {

// 1° creo una primera funcion que selecciona productos:
    // parametro "selectedItem" es la propiedad que vamos a mostrar.
    // parametro "setSelectedItem" es la función que vamos a mostrar.
    // useState: me permite controlar el estado del contenedor, de la propiedad y la funcion.
    const [selectItem, setSelectedItem] = useState (null);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


// 3° useEFfect = Ciclo de vida de un component de funcion
    // acepta la funcion getProducts de promises.js
    // se entre [] una dependencia para llamar a una promesa 
    useEffect(() => {
        getProducts();
    }, []);


// 2° creo el functional component para que traiga el resultado
  const getProducts = async () => {
    try {
      const result = await productsAPI;
      setProducts(result);
    } catch (error) {
      console.log({ error} );
    } finally {
        setLoading(false);
        console.log("Finalización del consumo de productsAPI");
    }
  };


  if (loading) {
    return <div>Cargando...</div>;
  }


  return (
    <div>
        <h1>Lista de productos</h1>
        <h3>Producto seleccionado</h3>
        <p>{selectItem && selectItem.name}</p>
        <p>{selectItem && selectItem.description}</p>
        <p>ID: {selectItem && selectItem.id}</p>
        <p>Stock seleccioando: {selectItem && selectItem.stock}</p>
        <hr />
        {/* products.map( ({id, name, description, stock}) => ( */}
        {products.map((product) => (
            <Item key={product.id} {...product} setSelectedItem={setSelectedItem} />
        ))}
    </div>
  );
};

export default ItemListContainer;

// las {} nos permiten hacer un corte y agregar JS puro
// map: metodo que hace iterar a cada uno de los objetos del array
// el sprit "...item" se utiliza solo cuando se que toda la informacion completa se puede enviar