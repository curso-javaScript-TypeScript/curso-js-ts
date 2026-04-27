exports.paginaInicial = (req, res) => {
  res.render('index');
  return;
};

exports.rotaPost = (req, res) => {
  res.send(req.body);
  return;
};


/* ########### exemplos e testes da aula ##########

const HomeModel = require('../models/HomeModel');

HomeModel.create({ <-- .find retornaria os dados no terminal
  titulo: 'Acrescentando mais um título na BD - aula 14',
  descricao: 'Base de Dados para o MongoBD.'
  // titulo: 'Título de teste - aula 14',
  // descricao: 'Descrição de testes.'
})
  .then(dados => console.log(dados))
  .catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
  console.log('Respondendo ao cliente.');
  res.render('index');
  return;
};

exports.rotaPost = (req, res) => {
  res.send(req.body);
  return;
};

*/