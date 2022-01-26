// ejemplo componente de funcion

import React from "react";

const FunctionalComponents = ({ name, age }) => {
  return (
    <div>
      <h1>Functional Components</h1>
      <h2>Nombre: {name} </h2>
      <h2>Edad: {age} </h2>
    </div>
  );
};

export default FunctionalComponents;