const pessoa = {
  nome: 'Magno',
  sobrenome: 'V Gomes',
  idade: 52,
  endereco: {
    quadra: '34 lote 55A',
    setor: 'Leste',
    cidade: 'Gama'
  }
};

const {nome, sobrenome, ... resto } = pessoa;
console.log(nome, sobrenome, resto);


/* **** Atribuição via desestruturação ****

const { endereco: {quadra: Q = 1107, cidade}, endereco } = pessoa;
console.log(Q, cidade, endereco);


const { nome = '' , sobrenome } = pessoa;
console.log(nome, sobrenome);

const { nome } = pessoa;
console.log(nome);

**** Mudando o valor da chaves ****
const { nome: teste = '', sobrenome, idade } = pessoa;
console.log(teste, sobrenome, idade);
*/




/*
const nome = pessoa.sobrenome; -> atribuição normal
console.log(nome);
console.log(pessoa.endereco);
*/