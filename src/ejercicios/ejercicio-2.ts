function generarMatrizDispersaDiagonal(dimension: number): number[][] {
	const matriz: number[][] = [];

	for (let i = 0; i < dimension; i++) {
			matriz[i] = [];
			for (let j = 0; j < dimension; j++) {
					if (i === j) {
							matriz[i][j] = Math.floor(Math.random() * 10);
					} else {
							matriz[i][j] = 0;
					}
			}
	}

	return matriz;
}

function imprimirMatriz(matriz: number[][]): void {
	for (let i = 0; i < matriz.length; i++) {
			console.log(matriz[i].join('\t'));
	}
}

export function solicitarDimensionDeMatriz() {
	const dimension = Number(prompt("Ingrese la dimensión de la matriz dispersa diagonal:"));
	
	if (isNaN(dimension) || dimension <= 0) {
		console.error("La dimensión debe ser un número mayor que cero.");
	} else {
		const matrizDispersaDiagonal = generarMatrizDispersaDiagonal(dimension);
	
		console.log("Matriz Dispersa Diagonal:");
		imprimirMatriz(matrizDispersaDiagonal);
	}
} 
