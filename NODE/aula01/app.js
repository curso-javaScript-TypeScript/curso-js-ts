const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./module1');
const module1 = require('./module1');

const pessoa1 = new Pessoa('Neusa');
console.log(module1);
console.log(pessoa1);



/*
######### exemplos e testes ##########
const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./module1');

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
  .then(response => console.log(response.data))
  .catch(e => console.log(e));

##############################################

const { Pessoa } = require('./module1');

const pessoa1 = new Pessoa('Magno', 'V Gomes');
console.log(pessoa1);

##############################################

const { nome, sobrenome, falaTeuNome } = require('./module1');

console.log(nome, sobrenome);
console.log(falaTeuNome());

##############################################

const module1 = require('./module1');
const falaTeuNome = module1.falaTeuNome;
console.log(falaTeuNome());

##############################################

const falaTeuNome = require('./module1').falaTeuNome;
console.log(falaTeuNome());

#############################################

const module1 = require('./module1');
console.log(module1);
console.log(module1.falaTeuNome());

*/