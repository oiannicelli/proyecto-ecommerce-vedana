import './App.css';
import { useEffect, useState } from 'react';


// navBar
import NavBar from "./components/navbar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';

// Componente contenedor - LISTADO DE PRODUCTOS
import ItemListContainer from './components/item-list-container/ItemListContainer';


/*
// Class Components
import { ClassComponents } from "./components/class-components/ClassComponents";
// functional Components
import FunctionalComponents from "./components/function-components/FunctionalComponents";
// Componente children
import ComponentChildren from "./components/component-children/ComponentChildren";
*/



function App() {
/*
  // Declaro las constantes y creo la funcion state hook para el ejemplo de Ciclo de vida en Funtional component
  const [showFunctionComponent, setShowFunctionComponent] = useState(true);
*/

/*
  ////////// MAPS 2
  // 1° se declara la const NAMES y la función SETNAMES para modificar el valor de NAMES:
  const [names, setNames] = useState(["Leo", "Juan", "Pedro"]);


  // 2° funcion para agregar nuevo valor
  const addNewName = () => setNames([...names, "Nuevo nombre"]);

  // 3° creo una funcion para borrar un valor:
  const delete3rdName = () =>
    setNames(names.filter((name, index) => index !== 2));
  ///////////
*/



  ///////////////// MAPS 1
  /*
  // 1° Creo el array:
      const array = ["Leo", "Juan", "Pedro"];

  // 2° imprimo en return el array en JSX:
    // Las llaves nos permiten agregar JS puro
    // MAP es el metodo que itera sobre cada valor del array
    // por cada iteracion RETORNA/imprime la informacion {name}

      <ul>
        {array.map((name) => {
          return <li> {name} </li>;
        })}
      </ul>
    */
  //////////////////


  ///////////////// PROMISE
  /*
  /// Declaro la constante con la funcion useState
  const [errorMessage, setErrorMessage] = useState("");
  */


  /*
  // por cada renderizacion del componente se va llamar al objeto productsAPI:
  productsAPI
      .then(
        (result) => {
          if (!result?.data?.array[0]?.user?.name) {
            throw new Error("Error de lógica de negocio");
          }
          // Aqui ya no pasaría y no se activaria el console.log
          console.log({ result });
        },
        (error) => {
          console.log({ error });
        }
      )
      .catch((error) => {
        setErrorMessage(error.message);
        console.log("error del catch", error);
      })
      .finally(() => {
        console.log("Promesa con then y catch finalizada");
      });
  */

  /*
  // agregar a return:
  <h1>Error: {errorMessage}</h1>
  */
  /////////////////



  return (
    <div className="App">
      <NavBar />
      <br />
      <br />

      <ItemListContainer />


      {/*<button onClick={addNewName}>Agregar "Nuevo nombre"</button>
      <button onClick={delete3rdName}>Eliminar 3er indice de names</button>
      <ul>
        {names.map((name, index) => (
          <>
            <li key={`${name}__${index}`}> {name} </li>
          </>
          ))}
        </ul>*/}

      {/*
      <ClassComponents name="Rodolfo" Edad="18"/>
      */}

      {/*
      {showFunctionComponent && <FunctionalComponents name="Mateo" Edad="24"/>}
      <button onClick = { () => setShowFunctionComponent(!showFunctionComponent)}>
        Eliminar componente funcional
      </button>
      */}

      {/*
      <ComponentChildren otherProp="El titulo">
        <h1>Hola, soy un componente hijo</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Beatae omnis est corrupti animi nisi assumenda, ipsa
        porro tempora magni velit quam dolores illo distinctio
        obcaecati provident amet harum reiciendis quia?
        </p>
      </ComponentChildren>
      */}
      
    </div>
  )
};

export default App;