
const itemDetail= ( { id, name, description, image} ) => {

  return (
    <>
      <div>
        <h2>Nombre producto: {name}</h2>
        <h2>Descripción del producto: {description}</h2>
        <img src={image} alt="image of product" />
        <h1>ID: {id} </h1>
      </div>
      <hr />
    </>
  );
};

export default itemDetail;