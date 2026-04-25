exports.paginaInicial = (req, res) => {
  console.log('Respondendo ao cliente.');
  res.render('index');
  return;
};

exports.rotaPost = (req, res) => {
  res.send(req.body);
  return;
};


/* ########### exemplos e testes da aula ##########

exports.paginaInicial = (req, res, next) => {
  console.log('Respondendo ao cliente.');
  res.render('index');
  console.log(`'Página Inicial.' Olha o que tem na req.session.nome: ${req.session.nome}`);
  next();
};


exports.rotaPost = (req, res, next) => {
  res.send('Criando a rota do POST!');
};
*/