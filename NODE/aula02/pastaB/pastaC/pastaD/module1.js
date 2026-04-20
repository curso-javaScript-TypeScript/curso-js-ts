module.exports = class Pet {
  constructor(nome) {
    this.nome = nome;
  }

  aprontar() {
    console.log(`${this.nome} está aprontando uma das suas.`)
  }
};




/*
######### exemplos e testes ##########

module.exports = function(x, y) {
  return x * y;
};

***************************************

module.exports = 2;

*/