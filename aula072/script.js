// defineProperty -> Getter e Setter
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    value: estoque, // mostra valor
    writable: false, // pode alterar ou não
    configurable: true // configurável mas não recomendável
  });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
