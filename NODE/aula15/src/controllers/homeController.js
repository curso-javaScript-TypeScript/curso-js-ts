exports.paginaInicial = (req, res) => {
  console.log(req.flash('error'), req.flash('success'), req.flash('info'));
  res.render('index');
  return;
};

exports.rotaPost = (req, res) => {
  res.send(req.body);
  return;
};


/* ######### testes e exemplos do código na aula 15 #########

exports.paginaInicial = (req, res) => {
  console.log(req.session.usuario);
  req.session.usuario = { nome: 'Magno', logado: true };

  req.flash('info', 'Deus é fiel!');
  req.flash('error', 'É um erro não crer nele!');
  req.flash('success', 'Só Jesus salva!');
  res.render('index');
  return;
};

exports.rotaPost = (req, res) => {
  res.send(req.body);
  return;
};

*/
