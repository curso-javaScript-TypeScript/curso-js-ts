 /********** Usando método mixins(composição) */
 
 const estudar = {
    estudar() {
      console.log(`${this.nome} está estudando.`);
    },
 }

 const entender = {
    entender() {
      console.log(`${this.nome} está compreendendo.`);
    },
 }

 const praticar = {
    praticar() {
      console.log(`${this.nome} está colocando em prática.`);
    },
 }
 
//  const pessoaPrototype = { ...estudar, ...entender, ...praticar };
  const pessoaPrototype = Object.assign({}, estudar, entender, praticar);

function CriaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome }
  });
}

const pessoa1 = CriaPessoa('Magno', 'V Gomes');
const pessoa2 = CriaPessoa('Neusa', 'da Silva');
console.log(pessoa1);
// console.log(pessoa2);


/*
************ Usando método ainda um pouco acoplado ****************

function CriaPessoa(nome, sobrenome) {
  const pessoaPrototype = {
    estudar() {
      console.log(`${this.nome} está estudando.`);
    },

    entender() {
      console.log(`${this.nome} está compreendendo.`);
    },
    
    praticar() {
      console.log(`${this.nome} está colocando em prática.`);
    },
  };

  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome }
  });
}

const pessoa1 = CriaPessoa('Magno', 'V Gomes');
const pessoa2 = CriaPessoa('Neusa', 'da Silva');
console.log(pessoa1);
console.log(pessoa2);

******************* Usando metodo de forma isolada *******************

function CriaPessoa(nome, sobrenome) {
  return {
    nome, 
    sobrenome,

    estudar() {
      console.log(`${this.nome} está estudando.`);
    },

    entender() {
      console.log(`${this.nome} está compreendendo.`);
    },

    praticar() {
      console.log(`${this.nome} está colocando em prática.`);
    },
  };
}

const pessoa1 = CriaPessoa('Magno', 'V Gomes');
console.log(pessoa1);
*/