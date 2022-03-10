import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './scss/styles.scss'; 
import Routes from './routes/Routes';
import { CartProvider } from './context/CartContext';

function App() {
    return (
        <>
          <div className="App">
            <CartProvider>
              <Routes />
            </CartProvider>
          </div>
        </>
  );
}

export default App;