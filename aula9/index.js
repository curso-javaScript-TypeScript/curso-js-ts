// ECMAScript 2015 (ES6)

// String, number, undefined, null, boolean
const nome = 'Magno'; // string
const nome1 = 'Magno'; // string
const nome2 = `Magno`; // string

const num1 = 10; // number
const num2 = 10.52; // number

let nomeAluno; // undefined -> não aponta pra local nenhum na memória
const sobrenomeAluno = null; // Nulo -> não aponta pra local nenhuma na memória
// usando null eu estou dizendo que este valor é nulo mas eu posso mudar se precisar

const aprovado1 = false; // Boolean = true, false (lógico)
const aprovado2 = true; // Boolean = true, false (lógico)

// console.log(typeof nome, nome); // declara tipo e valor


let a = 2;
const b = a;
console.log(a, b); // 2, 2

a = 3;
console.log(a, b); // 3, 2


// var nome = 'Magno'; // aceita alterar -> declarar e redeclarar
// var nome = 'Neusa';

//  console.log(nome);

// let nome = 'Magno'; // NÃO aceita alterar -> declarou já era
// let nome = 'Neusa';

//  console.log(nome);

 /*
 nome = 'Magno'; NÃO FAÇA ISSO - Não crie variáveis sem especificar
 se é (var, let ou const)
 */
