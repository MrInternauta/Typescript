interface Interface1 {
  pro1: number;
}
interface Interface2 {
  pro2: number;
}

interface Interface3 {
  pro1: number;
  pro2: number;
  pro3: number;
}

//Alias con 2 tipos diferentes
type InterfaceMix2 = Interface1 & Interface2;
//Se deben declarar ambos atributos de ambas interfaces
// const interfaceMixInter: InterfaceMix2 = {
//   pro1: 2
// } 
// const interfaceMixInter2: InterfaceMix2 = {
//   pro2: 3
// } 
type InterfaceMix3 = Interface1 & Interface2 & Interface3;

const interfaceMixInter3: InterfaceMix3 = {
  pro1: 2, 
  pro2: 12,
  pro3: 12 //Si elimino alguna de las propiedades voy a tener un error
}