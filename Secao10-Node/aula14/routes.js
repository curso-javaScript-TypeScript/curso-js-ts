const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');


// Rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.rotaPost);

// Rotas de contato
route.get('/contato', contatoController.contatoInicial);

module.exports = route;


/* ########### exemplos e testes da aula ##########

const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

function meuMiddleware(req, res, next) {
  req.session = { nome: 'Magno', sobrenome: 'V Gomes'};
  console.log();
  console.log('Passei pelo seu middleware.');
  console.log();
  next();
}

// Rotas da home
route.get('/', meuMiddleware, homeController.paginaInicial, function(req, res, next) {
  console.log();
  console.log('Não sai ainda, estou bem aqui!');
  console.log(`'Último middleware.' Olha o que tem na req.session.sobrenome: ${req.session.sobrenome}`);
});
route.post('/', homeController.rotaPost);
*/

