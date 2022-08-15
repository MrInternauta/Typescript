//Arreglos de string
let arrNombre: string[];
arrNombre = ['Alan', 'Alexis', 'Alejandro']
// arrNombre = [2,  'Alexis', 'Alejandro'] //Marca error ya que no corresponde un elemento
//arrNombre = [false,  'Alexis', 'Alejandro'] //Marca error ya que no corresponde un elemento
//arrNombre = [false,  12, 'Alejandro'] //Marca error ya que no corresponde un elemento

//Arreglos de number
let arrEdad: number[] = [20, 21, 19, 32];
//arrEdad = [true, 21, 19, 32]; //Marca error ya que no corresponde un elemento
//arrEdad = ['Felipe', 21, 19, 32]; //Marca error ya que no corresponde un elemento
//arrEdad = ['Felipe', {}, 19, 32]; //Marca error ya que no corresponde un elemento

//Arreglos de boolean
let arrBandera: boolean[] = [true, !false, false, !true];

//Arreglos de any

let arrAny: any[] = ['Carlos', 'Pedro', true, false, 21, 22, {}];

let ArrPersonas: any[] = 
[
  { nombre: 'Marco', edad: 21, apellido: 'Lopez' },
  { nombre: 'Jesus', edad: 23, apellido: 'Martinez'},
];

//Arreglos de arreglos
let arrArreglos: number[][];
arrArreglos = [ 
  [ 1, 2,3 ], 
  [ 1,2,4, ] 
];
//arrArreglos = [ [ 'Juan', 2,3 ], [ 1,2,4] ] //Error ya que los elementos no son del mismo tipo
//arrArreglos = [ [ false, 2,3 ], [ 1,2,4] ] //Error ya que los elementos no son del mismo tipo
//arrArreglos = [ [ 2,3 ], [ 1,2,4], 21 ] //Error ya que los elementos no son del mismo tipo

let arrArreglos2: string[][];
arrArreglos2 = [ 
  ['IronMan', 'Capitan America', 'Thor', 'Hulk'],
  ['Robert Jr.', 'Chris Evans', 'Chris Hemsworth', 'Mark Ruffalo']
]
//arrArreglos2 = [ [ 1, 2,3 ], [ 1,2,4, ] ];
//arrArreglos2 = [ [ 'Juan', 2,3 ], [ 1,2,4] ]
//arrArreglos2 = [ [ false, 2,3 ], [ 1,2,4] ]
let arrArreglos3: any[];

arrArreglos3 = [
  ['IronMan', 'Capitan America', 'Thor', 'Hulk'],
  ['Robert Jr.', 'Chris Evans', 'Chris Hemsworth', 'Mark Ruffalo'],
  [ 1, 2,3 ], 
  [ 1,2,4, ],
  [ false, 2,3 ], 
  [ 1,2,4],
  [ [ false, 2,3 ], [ 1,2,4] ]
];


