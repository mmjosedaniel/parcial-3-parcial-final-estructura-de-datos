function generarMatriz(longitud: number): number[][] {
	const matriz: number[][] = [];

	for (let i = 0; i < longitud; i++) {
			matriz[i] = [];
			for (let j = 0; j < longitud; j++) {
					matriz[i][j] = Math.floor(Math.random() * 10);
			}
	}

	return matriz;
}


export function sumarMatrices(longitud: number): void {
	const matriz1 = generarMatriz(longitud);
	const matriz2 = generarMatriz(longitud);
	
	const filas1 = matriz1.length;
	const columnas1 = matriz1[0].length;

	const resultado: number[][] = [];

	for (let i = 0; i < filas1; i++) {
			resultado[i] = [];
			for (let j = 0; j < columnas1; j++) {
					resultado[i][j] = matriz1[i][j] + matriz2[i][j];
			}
	}

	console.log('Matriz 1:');
	console.log(matriz1);
	console.log('Matriz 2:');
	console.log(matriz2);
	console.log('Resultado:');
	console.log(resultado);
}