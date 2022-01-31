// Promise es un objeto que nos permite representar y continuar con el ciclo de vida de una funcion.

// sintaxis para declarar el objeto PROMISE:

import { products } from "../data/products";

export const productsAPI = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
});