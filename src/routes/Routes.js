import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import NavBar from "../components/navbar/NavBar";
import ItemListContainer from "../components/item-list-container/ItemListContainer";
import ItemDetailContainer from "../components/item-detail-container/ItemDetailContainer";
import Home from "../components/home/home";
import CartIcon from '../components/icon/CartIcon';
import Checkout from '../components/checkout/checkout';
import NotFound from "../components/not-found/NotFound";


const Routes = () => {
  return (
    
    // contenedor de sistema de ruteo:
    <BrowserRouter>
        <NavBar />

        {/*componente que nos permite navegar entre rutas:*/}
        <Switch>
            <Route path= "/" element={<Home />} />
            <Route path= "/" element={<ItemListContainer />} />
            <Route path= "/category/:id" element={<ItemListContainer />} />
            <Route path= "/item" element={<ItemDetailContainer />} />
            <Route path= "/cart" element={<CartIcon />} />
            <Route path= "/checkout" element={<Checkout />} />
            <Route path= "*" element={<NotFound />} />
        </Switch>
    </BrowserRouter>
  );
};

export default Routes;
