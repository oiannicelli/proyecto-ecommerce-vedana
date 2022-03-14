import React from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import ItemListContainer from '../components/item-container/item-list-container/ItemListContainer';
import ItemDetailContainer from '../components/item-container/item-detail-container/ItemDetailContainer';
import NavBar from '../components/navbar/NavBar';
import Cart from '../components/cart/Cart';
import Form from '../components/form/Form';
import NotFound from '../components/not-found/NotFound';

const Routes = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:categoryId" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/form" element={<Form />} />
                <Route path="*" element={<NotFound />} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;