//Clases
class Trasporte {
  private velocidad: number;
  private formaDeMovilidad: string;
  constructor(velocidad: number, formaDeMovilidad: string) {
    this.velocidad = velocidad;
    this.formaDeMovilidad = formaDeMovilidad;
  }
  setVelocidad(velocidad: number): void{
    this.velocidad = velocidad;
  }
  setFormaDeMovilidad(formaDeMovilidad: string) {
    this.formaDeMovilidad = formaDeMovilidad;
  }
  getformaDeMovilidad(): string {
    return this.formaDeMovilidad;
  }
  getVelocidad(): number{
    return this.velocidad
  }
}

//Herencia
class Auto extends Trasporte {
  private cantidadPuertas: number;
  constructor(velocidad: number, formaDeMovilidad: string, cantidadPuertas: number) {
    super(velocidad, formaDeMovilidad);
    this.cantidadPuertas = cantidadPuertas;
  }

  getcantidadPuertas(){
    return this.cantidadPuertas;
  }
  setCantidadPuertas(cantidadPuertas: number){
    this.cantidadPuertas = cantidadPuertas;
  }
  //Error al modificar la función por que retorna un tipo string
  // getVelocidad(){
  //   return 'Mi velocidad es de ' + super.getVelocidad();
  // }

  //Forma correcta
   getVelocidad(){
    return 10 + super.getVelocidad();
  }


}

const trasporte: Trasporte = new Trasporte(0, 'Suelo');
const auto: Auto = new Auto(20, 'suelo', 4);
