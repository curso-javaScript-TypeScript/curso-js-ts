exports.middlewareGlobal = (req, res, next) => {
  next();
};


/* ########### exemplos e testes da aula ##########

exports.outroMiddleware = (req, res, next) => {
  console.log('Olá, sou seus mais novo middleware!');
  next();
};


module.exports = (req, res, next) => {
  if(req.body && req.body.cliente) {
    req.body.cliente = req.body.cliente.replace('Magno V Gomes', 'seu nome é Magno Vargas Gomes');
    console.log();
    console.log(`Percebemos que você é nosso novo cliente: ${req.body.cliente}.`);
    console.log();
  }
  next();
};

module.exports = (req, res, next) => {
  console.log();
  console.log('Passei pelo middleware global.');
  console.log();

  next();
};
*/