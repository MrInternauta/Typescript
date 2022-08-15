//Types, Type Inference y Type keyword
//Declaración tipo string
// declarar variables con javascript
let nombre = 'Felipe';



// declarar variables con TypeScript (lleva el tipo de dato)
//Si declaramos el tipo de datos vamos a tener el auto ayuda
let apellido: string = 'Ramirez';

//reasignar una variable solo la llamamos de nuevo y le asignamos el nuevo valor
apellido = 'Rodriguez';
apellido = "Rodriguez";
apellido = `Rodriguez`; 
//apellido = 1; //a una variable string no se le puede asignar un numero




//Declaración tipo number
let a: number = 10;
//si no se especifica el type, TypeScript se ejecutra el type-inference 
let b = 20;
const resultado = a + b;


//Declaración de booleans
let bandera: boolean = false;
let bandera2 = false;


//Declaración de any
let nombrePersona: any = false;
nombrePersona = '';
nombrePersona = 23;

//Declaración de objetos
let personaObj = {
  nombre: 'Felipe',
  edad: 21,
  nickName: 'MrInternauta'
}

let personaObj2: any = {
  nombre: 'Juan',
  edad: 22,
  apellido: 'Alvarez'
}

let personaObj3: Object = {
  nombre: 'Juan',
  edad: 22,
  apellido: 'Alvarez'
}



//la funciones que retornan valores tambien deben llevar el tipo de datos que retornan
function suma(num1:number, num2:number): number{
  return num1 + num2
}

//funciones con javascript vanilla (asigna el tipo any a los parametros)
function suma2(num1, num2){
return num1 + num2
}
suma(1,2);

// type-keyword asignamos un alias a nuestros types (es un alias que tiene una connotacion significativa en nuestro programa)
type CURP = string;
let curp: CURP = "RARF19219921901";

type TELEFONO = string;
let telefono: TELEFONO = "9219921901";

//Tambien pueden ser de tipo clase, interface, función etc.
