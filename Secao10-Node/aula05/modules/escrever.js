const fs = require('fs').promises;

module.exports = (caminho, dados) => {
  fs.writeFile(caminho, dados, { flag: 'w' });
};



/*
######### exemplos e testes ###########

const fs = require('fs').promises;
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.json');

const pessoas = [
  { nome: 'Magno'},
  { nome: 'Neusa'},
  { nome: 'Arthur'},
  { nome: 'Isaac'},
];
const json = JSON.stringify(pessoas, '', 2);

*******************************************************

fs.writeFile(caminhoArquivo, json, { flag: 'w' });
const fs = require('fs').promises;
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt');

fs.writeFile(caminhoArquivo, 'Frase 1\n', { flag: 'a', encoding: 'utf-8' });
fs.writeFile(caminhoArquivo, 'Frase 1', { flag: 'w', encoding: 'utf-8' });
*/
