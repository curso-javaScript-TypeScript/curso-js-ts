const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escrever = require('./modules/escrever');
const ler = require('./modules/ler');

async function lerArquivo(caminho) {
  const dados = await ler(caminho);
  mostrarDados(dados);
}

function mostrarDados(dados) {
  dados = JSON.parse(dados);
  dados.forEach(val => console.log(val));
  dados.forEach(val => console.log(val.nome));
}
lerArquivo(caminhoArquivo);


/*
######### exemplos e testes ###########
const pessoas = [
  { nome: 'Magno'},
  { nome: 'Neusa'},
  { nome: 'Arthur'},
  { nome: 'Isaac'},
];
const json = JSON.stringify(pessoas, '', 2);
escrever(caminhoArquivo, json);
*/