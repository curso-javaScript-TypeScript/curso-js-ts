const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// Retorne a soma do dobro de todos os pares
const numerosPares = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((ac, valor) => ac + valor);

console.log(numerosPares);

/* 
[ 50,   80, 2,  8, 22 ] pares
[ 100, 160, 4, 16, 44 ] dobro
324 -> soma do dobro de todos os pares
*/

console.log('\n****************\n');

// ********** INDIVIDUAIS ********* 
// -> Filtrar pares
const numPares = numeros.filter(function(valor) {
  return valor % 2 === 0;
});
console.log(numPares);

// -> Dobrar os valores
const numDobro = numeros.map(function(valor) {
  return valor * 2;
});
console.log(numDobro);

// -> Reduzir (somar tudo)
const somaTudo = numeros.reduce(function(acumulador, valor) {
  return  acumulador += valor;
}, 0);
console.log(somaTudo);
