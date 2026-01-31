/*
Primitivos imutáveis -> string, number, boolean, undefined, 
null (bigint, symbol) -- valores são copiados

let nome = 'Magno';
nome[0];
console.log(nome[0]), nome;

let a = 'A';
let b = a; // Cópia
console.log(a, b);

a = 'outro valor';
console.log(a, b);
 */

/****************************************************/

/*
Referência mutável -> Array, Object e Function -- Valores
passados por referência (aponta um para o outro)

let a = [1, 2, 3];
let b = [...a];
// let b = a;
console.log(a, b);

a.push(4, 5);
// console.log(a);
console.log(a, b);

b.pop();
// console.log(b);
console.log(b, a);

let c = b;
console.log(c);

a.push('Magno');
console.log(a, c);
*/

const a = {
  nome: 'Magno',
  sobrenome: 'V Gomes'
};

const b = a;
// const b = {...a};
b.nome = 'Gael';
console.log(a);
console.log(b);