// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave -> estoque
    value: estoque, // mostra valor inicial
    writable: true, // permite mudar ou não. Pode servir como chave de segurança
    configurable: true // NÃO permite apagar nem reconfigurar
  });

  Object.defineProperties(this, {
    nome: {
    enumerable: true, // mostra a chave -> estoque
    value: nome, // mostra valor inicial
    writable: true, // permite mudar ou não. Pode servir como chave de segurança
    configurable: true // NÃO permite apagar nem reconfigurar

    },
    preco:{
    enumerable: true, // mostra a chave -> estoque
    value: preco, // mostra valor inicial
    writable: true, // permite mudar ou não. Pode servir como chave de segurança
    configurable: true // NÃO permite apagar nem reconfigurar
    },
  });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

for(let chave in p1) {
  console.log(chave);
}



/*

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1)); <- mostra as chaves em uma array

for(let chave in p1) { <- itera as chaves do objeto
  console.log(chave);
}

************************************************

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  // this.estoque = estoque;

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave -> estoque
    value: estoque, // mostra valor inicial
    writable: false, // NÃO permite mudar (pode ser uma trava de segurança)
    configurable: true // NÃO permite apagar nem reconfigurar
  });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 20000;
delete p1.estoque;
console.log(p1);
*/