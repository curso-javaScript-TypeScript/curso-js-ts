class Pessoa1 {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  estudar() {
    console.log(`${this.nome} está estudando.`);
  }
}

function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.estudar = function() {
  console.log(`${this.nome} está estudando.`);
};

const pessoa1 = new Pessoa1('Magno', 'V Gomes');
const pessoa2 = new Pessoa2('Magno', 'V Gomes');

// console.log(pessoa1);
// console.log(pessoa2);


/*
class Pessoa {
  class Pessoa {
    constructor(nome, sobrenome) {
      this.nome = nome;
      this.sobrenome = sobrenome;
    }
  
    estudar() {
      console.log(`${this.nome} está estudando.`);
    }
    
  }
  
  const pessoa1 = new Pessoa('Magno', 'V Gomes');
  const pessoa2 = new Pessoa('Neusa', 'da Silva');
  const pessoa3 = new Pessoa('Arthur', 'Borges');
  const pessoa4 = new Pessoa('Laila', 'Vargas');
  console.log(pessoa1);
  console.log(pessoa2);
  console.log(pessoa3);
  console.log(pessoa4);

***********************************************************

  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  estudar() {
    console.log(`${this.nome} está estudando.`);
  }
  
  entender() {
    console.log(`${this.nome} está entendendo?`);

  }
  praticar() {
    console.log(`${this.nome} está colocando tudo em prática.`);
  }

}

const pessoa1 = new Pessoa('Magno', 'V Gomes');
console.log(pessoa1);
*/