// agregando una funcion a un objeto, nombreCompleto
let persona ={
    nombre : 'Juan',
    apellido : 'Perez',
    email: 'jperez@gmail.com',
    edad : 28,
    nombreCompleto : function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombreCompleto());

//acceso a las propiedades del objeto

console.log(persona['apellido']);

//for in

for (const nombrePropiedad in persona) {
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
    
}
