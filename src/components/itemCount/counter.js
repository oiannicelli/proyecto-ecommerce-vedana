import React, { useEffect, useState } from "react";

const ItemCounter = ({ stock,exportCounter }) => {
  const [counter, setCounter] = useState(0);
  const [stockSelected, setStockSelected] = useState(0);

  useEffect(() => {
    setStockSelected(counter);
  }, [counter]);

  const minusCounter = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  };

  const plusCounter = () => {
    if (counter >= stock) return;
    setCounter(counter + 1);
  };

  return (
    <>
      <div>
        <button onClick={minusCounter}>-</button>
        <span>{counter}</span>
        <button onClick={plusCounter}>+</button>
        <br/>
        <br/>
        <button onClick={() => exportCounter(counter)}>Seleccionar cantidad</button>
      </div>
    </>
  );
};

export default ItemCounter;