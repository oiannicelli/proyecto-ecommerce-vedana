import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import ItemCounter from "../itemCount/counter";

const ItemDetailContainer = () => {
  const { products } = useProducts();
  const { id } = useParams();

  const [selectedItem, setSelectedItem] = useState(null);
  const [stockSelected, setStockSelected] = useState(0);

  const exportCounter = (stock) => {
    setStockSelected(stock);
  }

  useEffect(() => {
    if (products.length > 0) {
      const selectedProduct = products.find((product) => product.id === id);
      setSelectedItem(selectedProduct);
    }
  }, [products]);

  return (
    <div>
      <h3>Producto seleccionado</h3>
      {selectedItem && selectedItem.image && (
        <img src={selectedItem.image} alt="selectedItemImage" />
      )}
      <p>{selectedItem && selectedItem.name}</p>
      <p>{selectedItem && selectedItem.description}</p>
      <p>ID: {selectedItem && selectedItem.id}</p>
      <p>STOCK seleccionado: {stockSelected}</p>
      <ItemCounter exportCounter={exportCounter} />
    </div>
  );
};

export default ItemDetailContainer;