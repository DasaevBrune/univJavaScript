//Paso por valor, tipos que no son numericos

//valor tipo primitivo, no tienen asociado ni atributos ni metodos
let x = 10; 

function cambiarValor(a){
    a = 20;
    return ;
}
//paso por valor
cambiarValor(x);
console.log(x);
//console.log(a);

//creando un objeto, almacena una referencia
const persona = {
    nombre: 'Juan',
    apellido: 'Perez'

}

// paso por referencia

function cambiarValorObjeto(p1){
    p1.nombre = 'Carlos';
    p1.apellido = 'Lara';
}

// paso por referencia
cambiarValorObjeto(persona);
console.log(persona);

