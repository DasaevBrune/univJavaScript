// function miFuncion(a,b){
//     console.log("Suma: " + (a + b));
// }

function miFuncion(a,b){
    console.log(arguments.length);
   return a + b;
}

let resultado = miFuncion(2,3);
console.log(resultado);

//funciones de tipo expresion o anonimas
let x = function(a,b){return a + b};
resultado = x(1,2);
console.log(resultado);

// Funciones self-invoking (anonima)
(function(a,b){
    console.log("ejecutando la funcion: " + (a+b));
})(3,4);

console.log(typeof miFuncion);

//function == method

var miFuncionTexto = miFuncion.toString;
console.log(miFuncionTexto);

//Funciones flecha -arrow function
const sumarTipoFlecha = (a,b) => a + b;
resultado = sumarTipoFlecha(3,5);
console.log(resultado);

//Parametros y Argumentos
let sumar = function(a = 4 ,b = 5){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);

    return a + b;
}

resultado = sumar(5,6);
console.log(resultado);

















