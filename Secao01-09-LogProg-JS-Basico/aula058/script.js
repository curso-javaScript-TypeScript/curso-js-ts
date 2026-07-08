// Função contrututora -> constrói objetos
// Função fábrica -> fabrica ojetos
// Na função contrutora tem que começar com letra maiúscula -> Cria (new)
function Pessoa(nome, sobrenome) {
  // Atributos ou métodos privados
  const ID = 260374;
  const metodoInterno = function() {
    // variável aqui
  };

  // Atributos ou métodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function() {
    console.log(this.nome + ': estudando sobre método');
  }
}

const pessoa1 = new Pessoa('Magno', 'V Gomes');
const pessoa2 = new Pessoa('Neusa', 'da Silva');

console.log(pessoa1.nome, pessoa1.sobrenome);
console.log(pessoa2.nome, pessoa2.sobrenome);
pessoa1.metodo();
pessoa2.metodo();



/*
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function() {
    console.log(this.nome + ': estudando sobre método');
  }
}

const pessoa1 = new Pessoa('Magno', 'V Gomes');
const pessoa2 = new Pessoa('Neusa', 'da Silva');

console.log(pessoa1.nome, pessoa1.sobrenome);
console.log(pessoa2.nome, pessoa2.sobrenome);
pessoa1.metodo();
pessoa2.metodo();
*/