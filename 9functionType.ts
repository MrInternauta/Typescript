// Un function type representa la estructura que tendrá la función a la cual se aplica el tipo y únicamente funciona para tipos de funciones.
//Los Functions types permiten definir la estructura de nuestra función, como por ejemplo los argumentos y retornos de la mísma.
//Cuando se envia una función dentro de otra funcion se le denomina callback
function sendRequest(funcion: any): void {
  if (funcion) {
    funcion();
  }
}

sendRequest(
  () => {
    console.log("Hola Mundo");
  })
type CallbackError = Error | null;
type Callback = (error: CallbackError, response: Object) => void
type sendRequest = (cb: Callback) => void;

let sendRequest2: sendRequest = (callback: Callback) => {
  if (callback) {
    callback(null,
      {
        status: true,
        message: 'Todo salio correctamente'
      });
  }
}

function sendRequest3(funcion: Callback): void {
  if (funcion) {
    funcion(null,
      {
        status: true,
        message: 'Todo salio correctamente'
      });
  }
}



//Otro ejemplo
//Los Functions types permiten definir la estructura de nuestra función, como por ejemplo los argumentos y retornos de la mísma.

type AreaRectangulo = (altura: number, base: number) => number;

const getAreaRectangulo: AreaRectangulo = 
(altura: number, base: number ): number => {
    return altura * base;
}