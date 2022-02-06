import { useEffect, useState } from "react";
import Item from '../item/item';


const ItemListContainer = () => {
// 2° Seteo la informacion que llego de la API al componente:
const [selectedItem, setSelectedItem] = useState (null);
const [characters, setCharacters] = useState([]);
const [loadingCharacters, setLoadingCharacters] = useState(true);

useEffect(() => {
  getRickAndMortyCharacter();
}, []);

// 1° creo la funcion para consumir la API
  const getRickAndMortyCharacter = async () => {

    try {
    // await: funcion para esperar la informacion (la Promise)
    // fecth: retorna una promise
    const response = await fetch ('https://rickandmortyapi.com/api/character');

    // para llamar a la promise y ver la informacion que retorna utilizo .JSON
    // ...para transformarlo en JS:
    const data = await response.json();

    setCharacters(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingCharacters (false);
    }
  };

// 3° Si "loadingCharacter" es TRUE:
  if (loadingCharacters) {
    return <h1>Cargando personajes...</h1>;
  }

  return (
    <div>
      <h1>Lista de productos</h1>
        <h3>Producto seleccionado</h3>

        {selectedItem && selectedItem.image && (
          <img src={selectedItem.image} alt="selectedItemImage" />
        )}

        <p>{selectedItem && selectedItem.name}</p>
        <p>{selectedItem && selectedItem.description}</p>
        <p>ID: {selectedItem && selectedItem.id}</p>
        <p>Stock seleccioando: {selectedItem && selectedItem.stock}</p>
        <hr />


      {/* utlizo MAP para poder iterar sobre todos los personajes:*/}
        {characters.map(({id, name, image }) => (
          <Item
          key={id}
          id={id}
          name={name}
          description={`Character ${name}`}
          image={image}
          setSelectedItem={setSelectedItem}
          />
        ))}
    </div>
  );
};

export default ItemListContainer;