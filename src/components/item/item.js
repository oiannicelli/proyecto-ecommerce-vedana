// COMPONENTE DE PRESENTACION - solo muestra la informacion

const Item = ( { name, price, id, createdBy, setSelectedItem }) => {

    // creo una funcion que llame por referencia a la funcion "setSelectedItem" para selecionar el producto y mostrar la informacion:
    // creo un objeto "{name, price, id}"
    const selectItem = () => setSelectedItem({ name, price, id, createdBy });

  return (
    <div>
      <h2>Nombre producto: {name}</h2>
      <h2>Precio producto: {price}</h2>
      <h2>Creado por: {createdBy}</h2>
      <button onClick={ selectItem }>Seleccionar producto</button>
      <hr />
    </div>
  );
};

export default Item;
