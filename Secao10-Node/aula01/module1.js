class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

const nome = 'Magno';
const sobrenome = 'V Gomes';

exports.nome = nome;
module.exports.sobrenome = sobrenome;
exports.Testando = 'Testando';



/*
######### exemplos e testes ##########
const nome = 'Magno';
const sobrenome = 'V Gomes';

module.exports = {
  nome, sobrenome, Pessoa
};

exports.Testando = 'Testando';

#######################################################


const nome = 'Magno';
const sobrenome = 'V Gomes';

const falaTeuNome = () => nome + ' ' + sobrenome;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaTeuNome = falaTeuNome;
this.nomeEsposa = 'Neusa B. da Silva';

console.log(module.exports);
console.log(exports);

#######################################################

const nome = 'Magno';
const sobrenome = 'V Gomes';

const falaTeuNome = () => {
  console.log(nome, sobrenome);
};

module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaTeuNome = falaTeuNome;

console.log(module);

##########################################
*/