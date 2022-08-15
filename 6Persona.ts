// Shapes
//Cada uno de los tipos tiene una forma o estructura en que es representado, 
//esto es mediante sus propiedades. Dentro de TypeScript si dos variables poseen propiedades 
//idénticas aunque sean de distintas interfaces o clases, estas pueden ser asignadas entre sí.


class Persona {
  altura: number;
  edad: number;
  ine: string; //opcional

  constructor(altura: number, edad: number, ine: string){
    this.altura = altura;
    this.edad = edad;
    this.ine = ine;
  }
}

class Alumno extends Persona{
  private matricula: string;
  constructor(altura: number, edad: number, ine: string, matricula: string){
    super(altura, edad, ine);
    this.matricula = matricula;
  }
}

let persona2: Persona = new Persona(1.75, 21, 'RARKD2KJ232K');
let alumno: Alumno = new Alumno(1.75, 21, 'RARKD2KJ232K', 'S1701623232323');
persona2 = alumno;
//Todo alumno es una persona pero no toda persona es un alumno (puede ser un docente, directivo);
//alumno = persona2; //falta el tipo matricula 

//Polimorfismo
let persona3: Persona = new Alumno(1.75, 21, 'RARKD2KJ232K', '');





