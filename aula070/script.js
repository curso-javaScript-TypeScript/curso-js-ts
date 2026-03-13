// Factory functions / Constructor functions / Classes

// const p1 = new Pessoa('Magno', 'V Gomes');
// const p2 = new Pessoa('Neusa', 'da Silva');

// console.log(p1);
// console.log(p2);

function Constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  
    Object.freeze(this);
    }
  
    const p1 = new Constructor('Magno', 'V Gomes');
    p1.nome = 'Não posso alterar nenhum valor';
    p1.sobrenome = 'Object.freeze, bloqueou qualver mudança';
    
    const p2 = new Constructor('Neusa', 'da Silva');
  
    console.log(p1);
    console.log(p2);
  
  
  
  /*
  
  function criaPessoa(nome, sobrenome) {
    return {
      nome,
      sobrenome,
      nomeCompleto() {
        return`${this.nome} ${this.sobrenome}`;
      }
    };
  }
  
  const p1 = criaPessoa('Magno', 'V Gomes');
  console.log(p1.nomeCompleto());

  ************************************************* 
  const pessoa1 = new Object();
  pessoa1.nome = 'Magno';
  pessoa1.sobrenome = 'V Gomes';
  
  delete pessoa1.nome;
  console.log(pessoa1);

  const pessoa1 = new Object();
  pessoa1.nome = 'Magno';
  pessoa1.sobrenome = 'V Gomes';
  
  console.log(pessoa1.nome);
  console.log(pessoa1.sobrenome);

***********************************************

  const pessoa = {
//chave / valor  
  nome: 'Magno',
  sobrenome: 'V Gomes'
};
const chave = 'nome';
console.log(pessoa[chave]);

  console.log(pessoa.nome);
  console.log(pessoa.sobrenome);
  console.log(pessoa['nome']);
  console.log(pessoa['sobrenome']);

***************************************************

  const pessoa1 = new Object();
  pessoa1.nome = 'Magno';
  pessoa1.sobrenome = 'V Gomes';
  pessoa1.idade = 52;

  pessoa1.falarNome = function() {
    return (`${this.nome} escrevendo seu nome.`);
  };
  pessoa1.getDatasNacimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
  };
for (let chave in pessoa1) {
  console.log(chave);
}
*/