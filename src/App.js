import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes/Routes';
import { CartContextProvider } from './context/cartContext';


function App() {

  return (
    <div className="App">
      <CartContextProvider>
        <Routes />
      </CartContextProvider>
    </div>
  )
};

export default App;