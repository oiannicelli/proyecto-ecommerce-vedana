// CONTADOR CON BOTÓN - clase 5
// * useState = // primero se declara la variable y despues la funcion para el valor de la variable


import React, { useEffect, useState } from "react";


const Counter = ({stock, setStockSelected}) => {

    // Se declara la constante para la funcion del contador
    const [counter, setCounter] = useState(0);

    //useEffect = Ciclo de vida de un component de funcion
        // acepta la funcion setStockSelected de items.js
        // se entre [] una dependencia para llamar a una promesa - COUNTER es la dependencia, el valor a contar
        useEffect(() => {
            setStockSelected(counter);
        }, [counter]);
    


    // Funcion para restar clicks
    const minusCounter = () => {
        if (counter <= 0) return;
        setCounter(counter - 1);
        
    };

    // Funcion para sumar clicks 
    const plusCounter = () => {
        if (counter >= stock) return;
        setCounter(counter + 1);
    };


    return (
        <>
        <div>
            <button onClick={minusCounter}>-</button>
            <span>{counter}</span>
            <button onClick={plusCounter}>+</button>
        </div> 
        </>  
    )
};

export default Counter;





/*// CONTADOR CON BOTÓN + fecha y hora- clase 5

import React, { useState } from "react";


const Counter = ({stock}) => {

    // Se declara la constante para la funcion del contador
    const [counter, setCounter] = useState(0);

    // Se declara la constante para la funcion de cuantos clicks se realizaron 
    const [currentTimes, setCurrentTimes] = useState(0);

    // Se declara la constante para la funcion de fecha y hora
    const [currentDate, setCurrentDate] = useState('');


    // Funcion para restar clicks
    const minusCounter = () => {
        if (counter <= 0) return;
        setCounter(counter - 1);
    };

    // Funcion para sumar clicks 
    const plusCounter = () => {
        if (counter >= stock) return;
        setCounter(counter + 1);
    };


    // Funcion para cantidad de clicks + fecha y hora
    const clickMe = () => {
        setCurrentTimes(currentTimes + 1);

        const today = new Date();
        setCurrentDate(`Hoy es ${today.getUTCFullYear()} - ${today.getMonth() + 1} - ${today.getDate()},
        y son las ${today.getHours()} : ${today.getMinutes()}`);
    };



    return (
        <>
        <div>
            
            <h3>Se realizaron {currentTimes} click!</h3>
            <h3>{currentDate}</h3>

            <button onClick={minusCounter}>-</button>
            <span>{counter}</span>
            <button onClick={plusCounter}>+</button>
            
        </div> 

        <button onClick={clickMe}>Clickeame!</button>
        </>  
    )
};

export default Counter;*/