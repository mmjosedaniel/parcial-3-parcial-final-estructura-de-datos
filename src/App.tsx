import React from "react";
import { sumarMatrices } from "./ejercicios/ejercicio-1";
import { solicitarDimensionDeMatriz } from "./ejercicios/ejercicio-2";

function App() {
	console.log('EJERCICIO 1');
	const nuevaMatriz = sumarMatrices(3);

	console.log('===========');
	console.log('EJERCICIO 2');
	solicitarDimensionDeMatriz();

console.log(nuevaMatriz)
  return (
    <div >
     
    </div>
  );
}

export default App;
