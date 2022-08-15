// Interfaces
type INE = number;
interface IPersona {
  altura: number;
  edad: number;
  nombre: string;
  apellido: string;
  ine?: INE; //opcional
  /*
  Dato curioso: El nombre Elvis Operator/Elvis Sign 
  proviene del famoso cantante estadounidense Elvis Presley. 
  Su peinado se asemeja a un signo de interrogación.
  */
}


const personaX: any = {
  altura: 1.75,
  edad: 21,
  nombre: 'Felipe',
  apellido: 'Ramirez',
  //ine: 12323 //puedo definir esta propiedad o no ya que es opcional
} 

//Objeto de tipo IPersona
const persona: IPersona = {
  altura: 1.75,
  edad: 21,
  nombre: 'Felipe',
  apellido: 'Ramirez'
  //ine: 12323 //puedo definir esta propiedad o no ya que es opcional
}