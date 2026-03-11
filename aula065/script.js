/* 
********** Filter, Map e Reduce ***************

Filter -> Sempre retornar um array, com a mesma quantidade 
de elementos ou menos.
*/
const pessoas = [
    { nome: 'Magno', idade: 51 },
    { nome: 'Neusa', idade: 38 },
    { nome: 'Arthur', idade: 55 },
    { nome: 'Gael', idade: 16},
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 87 },
  ];
// Retorne as pessoas que tem o nome com 5 letras ou mais
  const nomeGrande = pessoas.filter(obj => obj.nome.length <= 5);
  console.log(nomeGrande);
// Retorne as pessoas com mais de 50 anos
  const maisDe50anos = pessoas.filter(obj => obj.idade > 50);
  console.log(maisDe50anos);
// Retorne as pessoas cujo nome termina com a
  const nomeTerminaComA = pessoas.filter(obj => {
      return obj.nome.toLowerCase().endsWith('a');
    });
    console.log(nomeTerminaComA);


/*
Retorne os números maiores que 10
indíces          0  1   2   3  4 .....
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);

terminal = [ 50, 80, 11, 15, 22, 27 ]

*****************************************************************

const numerosFitrados = numeros.filter(valor => valor > 10);
console.log(numerosFitrados);

terminal = [ 50, 80, 11, 15, 22, 27 ]

******************************************************

const numerosFiltrados = numeros.filter(valor => {
  return valor > 10;
});
console.log(numerosFiltrados);

terminal = [ 50, 80, 11, 15, 22, 27 ]

*******************************************

como resolveria se não houvesse o filter

function callBackFilter(valor, indice, array) -> código maior
function callBackFilter(valor) {
  return valor > 10;
}
 terminal = [ 50, 80, 11, 15, 22, 27 ]

*************************************************

const menores = [];
    
for(let i = 0; i <numeros.length; i++) {
  if(numeros[i] > 10) {
    menores.push(numeros[i]);
  }
}
console.log(menores);

terminal = [ 50, 80, 11, 15, 22, 27 ]
*/
