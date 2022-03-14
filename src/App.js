import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context/CartContext';
import Routes from './routes/Routes';
import './App.css';
import './scss/styles.scss';

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