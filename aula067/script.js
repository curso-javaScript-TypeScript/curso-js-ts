/*
********** Filter, Map e Reduce ***************

Reduce -> é utilizado para reduzir um array a um único elemento
(como uma soma, um maior valor ou até um novo objeto).

.reduce(function(acumulador, valor, indice, array))

*/

// indíces       0  1   2   3  4 .....
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

/*  Some todos os números (Reduce)
const total = numeros.reduce(function(acumulador, valor, indice, array) {
  acumulador += valor;
  return acumulador;
}, 0);
console.log(total)

terminal = 236 */

/*
Retorne um array com os pares (Filter)
const total = numeros.reduce(function(acumulador, valor) {
  if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
  }, []);
console.log(total) 

Retorne um array com o dobro dos valores (Map)
const total = numeros.reduce(function(acumulador, valor) {
  acumulador.push(valor * 2);
    return acumulador;
  }, []);
console.log(total) 
*/

// Retorne a pessoa mais velha
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 10 },
  { nome: 'Rosana', idade: 64 },
  { nome: 'Wallace', idade: 51 },
];
const maisVelha = pessoas.reduce(function(acumulador, valor) {
  if(acumulador.idade > valor.idade) return acumulador;
  return valor;
});
console.log(maisVelha);