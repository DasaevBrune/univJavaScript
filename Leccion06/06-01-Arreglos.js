//let autos = new Array('BMW','Merc','Volvo') forma vieja de hacerlo

const autos = ['BMW','Mercedes Benz','Volvo']
console.log(autos);
console.log(autos[1]); 

for (let i = 0; i< autos.length; i++) {
  console.log((i+1) + ' ' + autos[i])
    }

//modificar los elementos de un arreglo
autos[1]= "Ford"
console.log(autos[1]);

//agregar valores con 'push'
autos.push('Audi');
console.log(autos);

console.log(autos.length);
autos[autos.length] = 'Chevy';
console.log(autos);

autos[5]="Porshe";
console.log(autos);
//preguntar si es un arreglo?

console.log(Array.isArray(autos));
console.log(autos instanceof Array);