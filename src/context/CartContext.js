import React, { createContext, useState, useContext } from "react";

const useCartContext = createContext([]);

export const CartContext = () => useContext(useCartContext);

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (objetItem) => {
        let carritoprevio = [...cartList];

        if (carritoprevio.some((idex) => idex.item.id === objetItem.item.id)) {
            carritoprevio.find(
                (idex) => idex.item.id === objetItem.item.id
            ).cantidad += objetItem.cantidad;

            setCartList(carritoprevio);
        } else {
            setCartList([...cartList, objetItem]);
        }
    };
    const clearList = () => setCartList([]);

    const precioTotal = () => {
        let total = 0;

        cartList.forEach((itemNvo) => {
            total += parseInt(itemNvo.item.price) * parseInt(itemNvo.stock);
        });

        return parseInt(total);
    };

    const formatoMoneda = (valor) =>
        valor.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
        });

    const removeItem = (id) => {
        setCartList(cartList.filter((itemNvo) => itemNvo.item.id !== id));
    };

    const iconCart = () =>
        cartList.reduce((acum, valor) => acum + valor.cantidad, 0);

    return (
        <useCartContext.Provider
            value={{
                cartList: cartList,
                addToCart,
                clearList,
                formatoMoneda,
                precioTotal,
                removeItem,
                iconCart,
            }}
        >
            {children}
        </useCartContext.Provider>
    );
};





/* import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    
    const addItem = (currentItem) => {
        if (items.some(({item}) => item.id === currentItem.item.id))
        return;
        setItems([...items, currentItem]);
    };
    
    return (
        <CartContext.Provider value={{
            items,
            addItem,
        }}>
        { children }
        </CartContext.Provider>
    );
}; */