/* defineProperty -> Getter e Setter
********** GETTER/SETTER NA FACTORY FUNCTION **********
*/
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    configurable: true, // configurável mas não recomendável
    get: function() {
      return estoquePrivado;
    },
    set: function(valor) {
      if (typeof valor !== 'number') {
        console.log('Valor inexistente!');
        return;
      }

      estoquePrivado = valor;
    }
  });
}

function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      nome = valor;
    }
  };
}

// const p2 = criaProduto('Camisa');
// console.log(p2);

const p2 = criaProduto('Camisa');
p2.nome = 'Muda para short';
console.log(p2.nome);


/*  
********** GETTER/SETTER NA CONSTRUCTOR FUNCTION **********

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    configurable: true, // configurável mas não recomendável
    get: function() {
      return estoquePrivado;
    },
    set: function(valor) {
      if (typeof valor !== 'number') {
        console.log('Valor inexistente!');
        return;
      }

      estoquePrivado = valor;
    }
  });
}

const p1 = new Produto('Camiseta', 20, 3);
// console.log(p1);
p1.estoque = 'Valor será decidido aqui';
console.log(p1.estoque);
*/