class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  get nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor) {
    valor = valor.split(' ');
    this.nome = valor.shift();
    this.sobrenome = valor.join(' ');
  }
}

const pessoa1 = new Pessoa('Magno', 'V Gomes');
pessoa1.nomeCompleto = 'Magno Vargas Gomes';
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

/*

  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa1 = new Pessoa('Magno', 'V Gomes');
console.log(pessoa1.nomeCompleto());

*******************************************************

const _velocidade = Symbol(); 
class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 99;
  }

  set velocidade(valor) {
    console.log('Setter!');
    if(typeof valor !== 'number') return;
    if(valor >= 100 || valor <= 0) return;
    this[_velocidade] = valor;
  }

  get velocidade() {
    console.log('Getter!');
    return this[_velocidade];
  }

  acelerar() {
    if(this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }

  freiar() {
    if(this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
}

const carro1 = new Carro('VeraCruz');

// for(let i = 0; i <= 200; i++) {
//   carro1.acelerar();
// }
carro1.velocidade = 2000;
console.log(carro1.velocidade);
*/