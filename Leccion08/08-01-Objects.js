//definiendo un objeto (se crea un objeto en memoria (referencia exadecimal ej. 0x3434))
let persona ={
    nombre : 'Juan',
    apellido : 'Perez',
    email: 'jperez@gmail.com',
    edad : 28,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());

console.log(persona);

let persona2 = new Object();

persona2.nombre = "Fulano";
persona2.direccion = "Galaxia 45";
persona2.telefono = "53434343434";

console.log(persona2)


//