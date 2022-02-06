import { useEffect, useState } from "react";
import { productAPI } from '../../helpers/promises';


const ItemListContainer = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

useEffect(() => {
    getSelectedProduct();
}, []);


  const getSelectedProduct = async () => {
    try {
        const result = await productAPI;
        setProduct(result);
    } catch (error) {
      console.log(error);
    } finally {
        setLoading (false);
    }
  };

  if (loading) {
    return <h1>Cargando producto...</h1>;
  }

  return (
    <div>
      <h1>Producto selecionado</h1>
        <p>{product[0].name}</p>
        <p>ID: {product[0].id}</p>
        <p>Stock: {product[0].stock}</p>
        <img src={product[0].image} alt="productItemImage" />
        <p>Descripción del producto: {product[0].description}</p>
        <hr />
    </div>
  );
};

export default ItemListContainer;