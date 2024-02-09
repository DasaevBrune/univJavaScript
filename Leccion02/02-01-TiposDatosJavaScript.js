//Tipo de dato String
var nombre = "Samuel";
console.log(typeof nombre);

nombre = 10;

console.log(typeof nombre)

//Tipo de dato numerico
var numero =  1000;
console.log(typeof numero)

//Tipo de dato objeto
var objeto = {
    nombre : "Melanie",
    apellido : "Sequera",
    telefono : "23232323" 
}

console.log(typeof objeto)

//Tipo de dato boolean (true, false)
var bandera = true;
console.log(typeof bandera);

//tipo de dato function
function miFuncion(){}
console.log(typeof miFuncion);

//tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo)

//Tipo de dato clase, a clase es una function
class persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(typeof persona)

//Tipo de dato undefined
var x;
console.log(typeof x);

//Tipo de dato null = Ausencia de valor
 var y = null;
 console.log(typeof null)

 x = undefined;
 console.log(typeof undefined)

 //arreglos en js son objetos

 var autos = ["BMW", "Audi", "Volvo"];
 console.log(typeof autos)

 var z = '';
 console.log(typeof z)


 var namme = "Jhon";
 var lastName = "Peter";
 var fullName = namme + " " + lastName;
 console.log(fullName);

 var nombreCompleto = "Dasaev" + " " + "Sequera";
 console.log(nombreCompleto);

 var x = namme + (219 + 3);
 console.log(x)

