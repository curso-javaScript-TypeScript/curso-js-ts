/*

***************AVALIAÇÃO CURTO CIRCUITO EM JS***************

&& -> false && true = 'false' -> a expressão para quando houver um operador 'false'

operadores no JavaScript falsos: false; 0; ''; ""; ``; null; undefined e NaN
console.log('Magno' && '' && 'Neusa');
console.log('Magno' && "" && 'Neusa');
console.log('Magno' && `` && 'Neusa');
console.log('Magno' && null && 'Neusa');
console.log('Magno' && undefined && 'Neusa');
console.log('Magno' && NaN && 'Neusa');

fora isso a interpretação é assim:

console.log('Magno' && 0 && 'Neusa'); -> retorna o valor mesmo, no caso 0
console.log('Magno' && true && 'Neusa'); -> retorna o último valor

const vaiExecutar = false;
const vaiExecutar = 'vai funcionar pq tem um valor que não está na lista dos falsy';
console.log(vaiExecutar && falaOi());
function falaOi () {
  return 'Oi';
}

|| -> true || false -> vai retornar o "valor verdadeiro"

retorna o primeito valor verdadeiro encontrado
console.log(0 || false || null || 'Magno V Gomes' || true);

const corUsuario = null;
const corUsuario = 'red';
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);

*/

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);
console.log(a || b || 'Arthurzinho' || c || d || e);