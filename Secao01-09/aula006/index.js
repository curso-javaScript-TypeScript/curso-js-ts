/*
Não podemos criar variáveis com palavras reservadas
como let = let, por exemplo.
variáveis precisam ter nomes significativos
Não pode começar o nome de uma variavél com números
Não pode conter espaços ou traços => nome cliente - nome-cliente
Utilizamos camelCase => nomeCompletoDoCliente
letras maiúsculas e minusculas fazem diferencas => nome - Nome
não podemos redeclarar variávies com let
NÃO UTILIZE VAR, UTILIZE LET.
*/
let nomeCliente = 'Magno';
nomeCliente = 'Neusa';

console.log(nomeCliente) // imprime = Neusa

// let nome; // Apenas declarou a variável
// nome = 'João'; // Inicializando a variável
// console.log(nome);

// nome = 'Otávio';
// console.log(nome);


// let nome = 'Henrique'; // String
//  // var nome = 'João' tem quase a mesma finalidade mais é antiga.

// console.log(nome, 'nasceu em 1984.');
// console.log('Em 2000', nome, 'conheceu Maria.');
// console.log(nome,'casou-se com Maria em 2012.');
// console.log('Maria teve 1 filho com',nome, 'em 2015.');
// console.log('O filho de',nome, 'se chama Eduardo.');
