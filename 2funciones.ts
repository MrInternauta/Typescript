//Funciones
//Funciones declarativas
function sumaNumeros(num1: number, num2: number): number {
  return num1 + num1;
}
//Funciones expresivas - funciones de tipo flecha
let sumaNumeros2 = (num1, num2) => {
  return num1 + num1;
}

let sumaNumeros3 = (num1: number, num2: number): number => {
  return num1 + num1;
}

//Ambos tipos de funciones (expresiva y declarativa) pueden recibir como parametro distintos tipos de parametros
//number
//string
//boolean
//any
//Object
//funciones anonimas

