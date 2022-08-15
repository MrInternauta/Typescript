//Union types
//Habrá ocasiones en las que necesitemos asignar variables con más de un tipo, 
//para evitar el uso de any debemos usar union types. Utilizando el signo ‘|’ podemos indicarle a 
//TypeScript que utilice uno u otro tipo de dato, por ejemplo:

type SumaParameter = string | number;
type SumaReturnNumber = number;

function Suma(num1: SumaParameter, num2: SumaParameter): SumaParameter {
  // return num1 + num2; //Error por que no sabe que es lo que va a retornar
  //return Number(num1) + Number(num2); //Especificar el tipo de dato
  return String(num1) + String(num2); //Especificar el tipo de dato
}


interface Interface1 {
  pro1: number;
}
interface Interface2 {
  pro2: number;
}


//Alias con 2 tipos diferentes
type InterfaceMix = Interface1 | Interface2;

const interfaceMix1: InterfaceMix = {
  pro1: 2
} 
const interfaceMix2: InterfaceMix = {
  pro2: 3
} 
const interfaceMix: InterfaceMix = {
  pro1: 2, //No tiro error
  pro2: 12
}
//Podemos usar propiedades de una u otra pero no una que no exista