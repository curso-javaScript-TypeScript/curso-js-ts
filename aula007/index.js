/*
Não podemos criar constantes com palavras reservadas
como let = let, por exemplo.
constantes precisam ter nomes significativos
Não pode começar o nome de uma constantes com números
Não pode conter espaços ou traços => nome cliente - nome-cliente
Utilizamos camelCase => nomeCompletoDoCliente
letras maiúsculas e minusculas fazem diferencas => nome - Nome
não podemos modificar o valor de uma constante
NÃO UTILIZE VAR, UTILIZE CONST.
*/
// const nome = 'João';
// console.log(nome)

 //const nome; Não pode é errado, tem que ter um valor

//  const nome = 'João';
 // nome = 'Magno'; aqui tb vai dar erro, nunca mude o valor de uma constante

 const primeiroNumero = 5; // Number = Número
 const segundoNumero = '10'; // String = letras

 console.log(typeof(primeiroNumero)); // para saber o tipo
 console.log(typeof(segundoNumero)); // para saber o tipo
 