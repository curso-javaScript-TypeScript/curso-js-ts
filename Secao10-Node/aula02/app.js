const Pet = require('./pastaE/module2.js');

const dog2 = new Pet('Kakau');
dog2.aprontar();



/*
######### exemplos e testes ##########

const path = require('path');
console.log(__dirname);
console.log(path.resolve(__dirname, '..', '..', 'css', 'img'))
console.log(path.resolve(__dirname, '.', '.', 'css', 'img'))

*****************************************
console.log(__filename);
console.log(__dirname);

*****************************************

const Pet = require("./pastaE/module2")

const dog2 = new Pet('TomTom');
dog2.aprontar();
*****************************************
const Pet = require("./pastaB/pastaC/pastaD/module1")

const dog = new Pet('Kakau');
dog.aprontar();

****************************************

const multiplica = require('./module1');

console.log(multiplica(2, 3));

****************************************
const numero = require('./module1');

console.log(numero);
*/