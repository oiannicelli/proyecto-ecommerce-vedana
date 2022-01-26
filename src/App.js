import './App.css';

// importacion manual de archivo navBar
import NavBar from "./components/navbar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';

// importacion Class Components
import { ClassComponents } from "./components/class-components/ClassComponents";

// importacion functional Components
import FunctionalComponents from "./components/function-components/FunctionalComponents";

// importacion Componente contenedor
import ItemListContainer from './components/item-list-container/ItemListContainer';

// importacion Componente children
import ComponentChildren from "./components/component-children/ComponentChildren";


function App() {
  return (
    <div className="App">
      <NavBar />
      <ClassComponents name="Rodolfo" Edad="18"/>
      <hr />
      <FunctionalComponents name="Mateo" Edad="24"/>
      <hr />
      <ItemListContainer />

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
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;