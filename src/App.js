import './App.css';
import { useState } from 'react';


// navBar
import NavBar from "./components/navbar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
// Class Components
import { ClassComponents } from "./components/class-components/ClassComponents";
// functional Components
import FunctionalComponents from "./components/function-components/FunctionalComponents";
// Componente contenedor
import ItemListContainer from './components/item-list-container/ItemListContainer';
// Componente children
import ComponentChildren from "./components/component-children/ComponentChildren";
// ItemCounter
import Counter from './components/itemCount/counter';



function App() {

  // Declaro las constantes y creo la funcion state hook para el ejemplo de Ciclo de vida en Funtional component
  const [showFunctionComponent, setShowFunctionComponent] = useState(true);

  return (
    <div className="App">
      <NavBar />
      <hr />
      <hr />

      <h1>Cuadro Lirios</h1>
      <Counter stock={20} />

      <hr />
      <hr />

      <ClassComponents name="Rodolfo" Edad="18"/>

      <hr />
      <hr />

      {showFunctionComponent && <FunctionalComponents name="Mateo" Edad="24"/>}
      <button onClick = { () => setShowFunctionComponent(!showFunctionComponent)}>
        Eliminar componente funcional
      </button>

      <hr />
      <hr />

      <ItemListContainer />

      <br />
      <br />

      <ComponentChildren otherProp="El titulo">
        <h1>Hola, soy un componente hijo</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Beatae omnis est corrupti animi nisi assumenda, ipsa
        porro tempora magni velit quam dolores illo distinctio
        obcaecati provident amet harum reiciendis quia?
        </p>
      </ComponentChildren>

      <br />
      <br />
      
    </div>
  );
}

export default App;