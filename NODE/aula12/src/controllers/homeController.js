exports.paginaInicial = (req, res) => {
  res.render('index');
};


exports.rotaPost = (req, res) => {
  res.send('Criando a rota do POST!');
};