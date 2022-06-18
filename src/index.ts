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

// function pedirTamano(): number {
//   let tamanoCorrecto: boolean = false;
//   let tamano: number;
//   tamano = Number(prompt("Ingrese el tamaño del array"));
//   tamanoCorrecto = verificacionTamanoArray(tamano);
//   if (tamanoCorrecto === true) {
//     return tamano;
//   } else {
//     while (tamanoCorrecto !== true) {
//       alert("El dato ingresado no es valido, intentelo nuevamente.");
//       tamano = Number(prompt("Ingrese el tamaño del array"));
//       tamanoCorrecto = verificacionTamanoArray(tamano);
//     }
//   }
//   return tamano;
// }
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

function comprobarMatrices(A: number[][], B: number[][]) {
  let igualDimension: boolean = false;
  let esCuadrada: boolean = false;

  if (A.length === B.length) {
    if (A[0].length === B[0].length) {
      igualDimension = true;
      console.log("Las matrices son de igual dimension");
    }
  } else {
    console.log("Las matrices no son de igual dimension");
  }

  if (A.length === A[0].length) {
    esCuadrada = true;
    console.log("La matriz A es cuadrada.");
  } else {
    console.log("La matriz A no es cuadrada.");
  }

  if (B.length === B[0].length) {
    esCuadrada = true;
    console.log("La matriz B es cuadrada.");
  } else {
    console.log("La matriz B no es cuadrada.");
  }
}

let tamanoFilaA: number;
let tamanoColumnaA: number;
let tamanoFilaB: number;
let tamanoColumnaB: number;
let matrizA: number[][];
let matrizB: number[][];

tamanoFilaA = pedirTamano();
tamanoColumnaA = pedirTamano();
matrizA = crearMatriz(tamanoFilaA, tamanoColumnaA);

tamanoFilaB = pedirTamano();
tamanoColumnaB = pedirTamano();
matrizB = crearMatriz(tamanoFilaB, tamanoColumnaB);

console.clear();
cargarMatriz(matrizA, tamanoFilaA, tamanoColumnaA);
cargarMatriz(matrizB, tamanoFilaB, tamanoColumnaB);

comprobarMatrices(matrizA, matrizB);

console.log(matrizA);
console.log(matrizB);

//pedir el numero, si el numero es correcto asignarlo a la variable.
