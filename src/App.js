import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from './components/item-list-container/ItemListContainer';
import ItemDetailContainer from './components/item-detail-container/ItemDetailContainer';

function App() {


  return (
    <div className="App">
      <NavBar />
      <br />
      <br />

{/*      <ItemListContainer />+*/}
      <ItemDetailContainer/>
    </div>
  )
};

export default App;