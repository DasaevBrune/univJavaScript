let resultado = sumarTodo(5,4,13,10,9,8);
console.log(resultado);

function sumarTodo(){
    // se definen variable para iterar arreglo de argumentos
    let suma = 0;
    for(let i = 0; i < arguments.length; i ++ ){
       suma += arguments[i];
    }
    return suma;
}