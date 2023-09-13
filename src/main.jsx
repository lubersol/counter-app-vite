// eslint-disable-next-line no-unused-vars
import React from "react";
import { createRoot } from "react-dom/client"; // llamada al React DOM para renderizar componentes

import { FirstApp } from './FirstApp';
// import { CounterApp } from './CounterApp';

import './styles.css';

// const saludo = <h1>Hola mundo</h1>;
 
// react 18
const root = createRoot(document.getElementById('root'));
root.render(<FirstApp title="Hola, soy Lucia" />);
