function tamanoCorrecto(numLocal: number): boolean {
  let datoValido: boolean = !isNaN(numLocal);
  if (numLocal < 1 && datoValido === true) {
    datoValido = false;
  }
  return datoValido;
}

function esNumero(numLocal: number): boolean {
  let datoValido: boolean = !isNaN(numLocal);
  if (datoValido === true) {
    return datoValido;
  } else {
    datoValido = false;
    return datoValido;
  }
}

function pedirNumero(): number {
  let aux: number;
  aux = Number(prompt("ingrese el numero"));
  if (esNumero(aux) === true) {
    return aux;
  } else {
    alert("ingrese un numero por favor.");
    aux = pedirNumero();
  }
  return aux;
}

function pedirTamano(): number {
  let aux: number;
  aux = Number(prompt("ingrese el tamaño de la matriz"));
  if (tamanoCorrecto(aux) === true) {
    return aux;
  } else {
    while (tamanoCorrecto(aux) !== true) {
      alert("dato erroneo intente nuevamente.");
      aux = pedirNumero();
    }
  }
  return aux;
}

function crearMatriz(fila: number, columna: number): number[][] {
  let matrix: number = new Array(fila - 1);
  for (let i: number = 0; i < fila; i++) {
    matrix[i] = new Array(columna - 1);
  }
  return matrix;
}

function cargarMatriz(matrix: number[][], fila: number, columna: number) {
  let aux: number;
  for (let i: number = 0; i < fila; i++) {
    for (let j: number = 0; j < columna; j++) {
      aux = pedirNumero();
      matrix[i][j] = aux;
    }
  }
}

function matrizCuadrada(matrix: number[][]): boolean {
  let esCuadrada: boolean = false;
  if (matrix.length === matrix[0].length) {
    esCuadrada = true;
  }
  return esCuadrada;
}

function compararDimension(A: number[][], B: number[][]): boolean {
  let igualDimension: boolean = false;
  if (A.length === B.length) {
    if (A[0].length === B[0].length) {
      igualDimension = true;
    }
  }
  return igualDimension;
}

function sumarMatrices(A: number[][], B: number[][]): number[][] {
  let matrixResultado: number[][];
  matrixResultado = crearMatriz(A.length, A[0].length);
  for (let i: number = 0; i < A.length; i++) {
    for (let j: number = 0; j < A[0].length; j++) {
      matrixResultado[i][j] = A[i][j] + B[i][j];
    }
  }
  return matrixResultado;
}

let tamanoFilaA: number;
let tamanoColumnaA: number;
let matrizA: number[][];
//tamanoFilaA = pedirTamano();
//tamanoColumnaA = pedirTamano();
//matrizA = crearMatriz(tamanoFilaA, tamanoColumnaA);

let tamanoFilaB: number;
let tamanoColumnaB: number;
let matrizB: number[][];
// tamanoFilaB = pedirTamano();
// tamanoColumnaB = pedirTamano();
// matrizB = crearMatriz(tamanoFilaB, tamanoColumnaB);

let matrizResultado: number[][];

// console.clear();
cargarMatriz(matrizA, tamanoFilaA, tamanoColumnaA);
// //cargarMatriz(matrizB, tamanoFilaB, tamanoColumnaB);

// //comprobarMatrices(matrizA, matrizB);

//console.log(matrizA.length + " devuelve la cantidad de columnas q componen la/s fila/s");
//console.log(matrizA[0].length + " devuelve el tamaño de las columnas");
//console.log(matrizA);

//pedir el numero, si el numero es correcto asignarlo a la variable. LISTO
//crear funcion sumar matrices y devolver resultado. LISTO
//crear funcion multiplicar por escalar
//crear funcion buscar inversa
//crear funcion calcular determinante
