const pessoa1 = {
  nome: 'Magno',
  sobrenome: 'V Gomes',
  idade: 51,

  fala () {
    console.log(`${this.nome} ${this.sobrenome} está aprendendo muito...`);
    console.log(`A minha idade é ${this.idade} anos.`);
  },

  incrementaIdade() {
    this.idade++;
  }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();

pessoa1.fala();


/* objetos reduz a criação de inumeras variáveis
function criaPessoa (nome, sobrenome, idade) {
  return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('Magno', 'V Gomes', 51);
const pessoa2 = criaPessoa('Neusa', 'Silva', 36);
const pessoa3 = criaPessoa('Arthur', 'Borges', 16);
const pessoa4 = criaPessoa('Magno', 'Junio', 30);
const pessoa5 = criaPessoa('Magno', 'Neto', 2);


console.log(pessoa1.nome, pessoa3.sobrenome);
const pessoa1 = {
  nome: 'Magno',
  sobrenome: 'V Gomes',
  idade: 51
};

const pessoa2 = {
  nome: 'Neusa',
  sobrenome: 'V Silva',
  idade: 36
};


console.log(pessoa1.nome);
console.log(pessoa2.idade);
const nome1 = 'Magno';
const sobrenome1 = 'V Gomes';
const idade1 = 51;

const nome2 = 'Neusa';
const sobrenome2 = 'Silva';
const idade2 = 36;
*/