// ejemplo CICLO DE VIDA en un Functional Component
import React, { useState, useEffect } from "react";

const FunctionalComponents = ({ name, age }) => {

  // 1° declaro las constantes y creo la funcion state hook:
  const [user, setUser] = useState({
    name: "Juan",
    surname: "Perez",
    });


//////////
  // useEffect es un HOOK que nos permite manejar el estado de manera completa, para que se renderice una sola vez
  useEffect(() => {

    // callback para crear la logica:
    console.log("Soy un componente funcional");
  
    // cada vez que la dependencia se modifica, se retorna esta logica, si no hay dependencias no se actualiza:
    return () => {
      console.log("Voy a ser eliminado, crear nueva logica");
    };
  },

  // arreglo de dependencias para que se actualice el estado del componente, si esta vacio no se actualiza:
  [user]);
//////////// 


  // 3° declaro la condicion SIEMPRE despues del HOOK:
  if (!name) {
    return <h1>NAME NO EXISTE</h1>
  }

  // 2° creo una funcion para cambiar el valor de la propiedad:
  const updateNAmeAndSurname = () => {
    setUser({ ...user, name: "Leo" });
  };

  return (
    <div>
      <h1>Functional Components</h1>
      <h2>Nombre: {name} </h2>
      <h2>Edad: {age} </h2>

      <h2>stateName: {user.name} </h2>
      <h2>stateSurname: {user.surname} </h2>
      <button onClick={updateNAmeAndSurname}>
        Cambiar stateProps
      </button>
    </div>
  );
};

export default FunctionalComponents;




/*// ejemplo componente de funcion modificando STRING con funcion HOOK
import React, { useState } from "react";

const FunctionalComponents = ({ name, age }) => {

  // 1° declaro las constantes y creo la funcion state hook:
  const [user, setUser] = useState({
    name: "Juan",
    surname: "Perez",
    });

  // 2° creo una funcion para cambiar el valor de la propiedad:
  const updateNAmeAndSurname = () => {
    setUser({ ...user, name: "Leo" });
  };

  return (
    <div>
      <h1>Functional Components</h1>
      <h2>Nombre: {name} </h2>
      <h2>Edad: {age} </h2>

      <h2>stateName: {user.name} </h2>
      <h2>stateSurname: {user.surname} </h2>
      <button onClick={updateNAmeAndSurname}>
        Cambiar stateProps
      </button>
    </div>
  );
};

export default FunctionalComponents;*/



/*// ejemplo componente de funcion modificando OBJETO con funcion HOOK
import React, { useState } from "react";

const FunctionalComponents = ({ name, age }) => {

  // 1° declaro las constantes y creo la funcion state hook:
  const [stateName, setStateName] = useState("Juan");
  const [surname, setSurname] = useState("Perez");

  // 3° declaro la condicion SIEMPRE despues del HOOK:
  if (!name) {
    return <h1>NAME NO EXISTE</h1>
  }

  // 2° creo una funcion para cambiar el valor de la propiedad:
  const updateNAmeAndSurname = () => {
    setStateName("Leo");
    setSurname("Garcia");
  };

  return (
    <div>
      <h1>Functional Components</h1>
      <h2>Nombre: {name} </h2>
      <h2>Edad: {age} </h2>

      <h2>stateName: {stateName} </h2>
      <h2>stateSurname: {surname} </h2>
      <button onClick={updateNAmeAndSurname}>
        Cambiar stateProps
      </button>
    </div>
  );
};

export default FunctionalComponents;*/