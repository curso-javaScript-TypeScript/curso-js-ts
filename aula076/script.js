// Produto -> aumento, desconto
// Camiseta = Cor, caneca = material
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
} 
Produto.prototype.acrescimo = function(valor) {
  this.preco += valor;
};
Produto.prototype.desconto = function(valor) {
  this.preco -= valor;
};

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.acrescimo = function(percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100));
};

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;

  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,
    get: function() {
      return estoque;
    },
    set: function(qtde) {
      if (typeof qtde !== 'number') return;
      estoque = qtde;
    }
  });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('Testando', 200);
const camiseta = new Camiseta('Regata', 8.5, 'Azul');
const caneca = new Caneca('Personalizada', 25, 'Porcelana', 50);
caneca.estoque = 200;
// caneca.estoque = '200'; <- não recebe por ser string

console.log(caneca.estoque);
console.log(caneca);
console.log(camiseta);
console.log(produto);