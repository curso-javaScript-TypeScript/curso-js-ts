function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
  this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.acrescimo = function(percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100));
};

const produto1 = new Produto('Camiseta', 50);

// Objeto Literal
const produto2 = {
  nome: 'Blusa',
  preco: 15
};
Object.setPrototypeOf(produto2, Produto.prototype);

produto2.acrescimo(10);

const produto3 = Object.create(Produto.prototype, {
  preco: {
    writable: true,
    configurable:  true,
    enumerable: true,
    value: 40
  },
  tamanho: {
    writable: true,
    configurable:  true,
    enumerable: true,
    value: 45
  },
});
produto3.acrescimo(20);
console.log(produto3);


// produto3.preco = 120;
// produto3.acrescimo(10);
// console.log(produto3);


/*
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
  this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.acrescimo = function(percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100));
};

const produto1 = new Produto('Camiseta', 50);

// Objeto Literal
const produto2 = {
  nome: 'Blusa',
  preco: 15
};
Object.setPrototypeOf(produto2, Produto.prototype);

// produto1.desconto(60);
// produto1.acrescimo(100);
produto2.acrescimo(10);
console.log(produto1);
console.log(produto2);

**************************************************

new Objetc -> Object.prototype+
const ObjA = {
  chaveA: 'A'
  __proto__: Object.prototype
};

const ObjB = {
  chaveB: 'B'
  __proto__: ObjA <- manipulando Prototype
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(ObjB, ObjA);
Object.setPrototypeOf(objC, ObjB);
console.log(objC.chaveA); // -> herdando object do Pai
*/
