import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDJDuNeefn0nBAT8JFZaFsqHsBRQgdi1Zc",
  authDomain: "proyecto-ecommerce-vedana.firebaseapp.com",
  projectId: "proyecto-ecommerce-vedana",
  storageBucket: "proyecto-ecommerce-vedana.appspot.com",
  messagingSenderId: "576682698989",
  appId: "1:576682698989:web:8b2620400bd93a1ea0c4e4"
};
initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
