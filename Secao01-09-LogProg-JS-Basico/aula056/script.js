// Factory function (Função fábrica)
// Construtor function (Função construção)
function criaPessoa(nome, sobrenome, alt, pes) {
  return {
    nome,
    sobrenome,

    // Getter -> serve para pegar/buscar (ler) um valor
    get nomeCompleto() {
      return`${this.nome} ${this.sobrenome}`;
    },

    // Setter -> serve para configurar definir/escrever o valor
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
      console.log(valor);
    },

    fala(tema = 'estudando funções em JS.') {
      return `${this.nome} ${this.sobrenome} está ${tema}`;
    },

    altura : alt,
    peso: pes,
    // Getter: AQUI usa a palavra 'get' antes da função
    get imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

const pessoa1 = criaPessoa('Magno', 'V Gomes', 1.82, 155);
const pessoa2 = criaPessoa('Neusa', 'da Silva', 1.53, 58);
const pessoa3 = criaPessoa('Claudia', 'V Gomes', 1.68, 70);

console.log(pessoa1.imc);
console.log(pessoa2.imc);
console.log(pessoa3.imc);






/*

function criaPessoa(nome, sobrenome, alt, pes) {
  return {
    nome,
    sobrenome,

    // Getter -> serve para pegar/buscar (ler) um valor
    get nomeCompleto() {
      return`${this.nome} ${this.sobrenome}`;
    },

    // Setter -> serve para configurar definir/escrever o valor
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
      console.log(valor);
    },

    fala(tema = 'estudando funções em JS.') {
      return `${this.nome} ${this.sobrenome} está ${tema}`;
    },

    altura : alt,
    peso: pes,
    // Getter: AQUI usa a palavra 'get' antes da função
    get imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

const pessoa1 = criaPessoa('Magno', 'V Gomes', 1.82, 155);
pessoa1.nomeCompleto = 'Claudemagno Vargas Gomes';
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.fala());

*******************************************************************

function criaPessoa(nome, sobrenome, alt, pes) {
  return {
    nome,
    sobrenome,

    // Getter: AQUI usa a palavra 'get' antes da função
    get nomeCompleto() {
      return`${nome} ${sobrenome}`;
    },

    fala(tema) {
      return `${this.nome} ${this.sobrenome} está ${tema}`;
    },

    altura : alt,
    peso: pes,
    // Getter: AQUI usa a palavra 'get' antes da função
    get imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

const pessoa1 = criaPessoa('Magno', 'V Gomes', 1.82, 155);
console.log(pessoa1.nomeCompleto);
// console.log(pessoa1.nome + ' ' + pessoa1.sobrenome);

****************************************************************

function criaPessoa(nome, sobrenome, alt, pes) {
  return {
    nome,
    sobrenome,
    fala(tema) {
      return `${this.nome} ${this.sobrenome} está ${tema}`;
    },
    altura : alt,
    peso: pes,
    imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

const pessoa1 = criaPessoa('Magno', 'V Gomes', 1.82, 155);
console.log(pessoa1.imc());
console.log(pessoa1.fala('estudando a Função Fábrica em JS\n'));

const pessoa2 = criaPessoa('Neusa', 'B. da Silva', 1.53, 60);
console.log(pessoa2.imc());
console.log(pessoa2.fala('estudando a Função Fábrica em JS'));

******************************************************************

function criaPessoa(nome, sobrenome) {
  return {
    nome, 
    sobrenome,
    fala: function(tema) {
      return `${nome} está ${tema}`;
    }
  };
}

*****************************************************

const pessoa1 = criaPessoa('Magno', 'V Gomes');
console.log(pessoa1.fala('entendendo Função Fábrica em JS'));
function criaPessoa(nome, sobrenome) {
  return {
    nome, sobrenome
  };
}

const pessoa1 = criaPessoa('Magno', 'V Gomes');
const pessoa2 = criaPessoa('Neusa', 'Silva');

console.log(pessoa1, pessoa2);
*/