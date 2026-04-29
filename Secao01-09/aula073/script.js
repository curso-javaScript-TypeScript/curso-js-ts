/*
Object.values
Object.entries
Object.getOwnPropertyDescriptor(o, 'prop')
Object.assign(des, any)
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/
const produto = { nome: 'Caneca', preco: 1.5, material: 'porcelana' };

  for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
  }
console.log('\n', Object.entries(produto), '\n');
console.log(Object.values(produto));

/*

*****************************************************************************************
###### "Spread Operator" 1ª - forma de copiar propriedades de um objeto para outro ######

const produto = { nome: 'Caneca', preco: 1.5 };
const outroProduto = { ...produto, material:'porcelana' };

outroProduto.nome = 'Magno V Gomes';
outroProduto.preco = 2.5;
console.log(produto);
console.log(outroProduto);

***************************************************************************
###### "Object.assign" 2ª - forma de copiar propriedades de um objeto para outro ######

const produto = { nome: 'Caneca', preco: 1.5 };
const outroProduto = Object.assign({}, produto, { material: 'porcelana' });

outroProduto.nome = 'Magno V Gomes';
outroProduto.preco = 2.5;
console.log(produto);
console.log(outroProduto);
************************************************
###### "Object.getOwnPropertyDescriptor" 3ª - forma de copiar propriedades de um objeto para outro ######

const produto = { nome: 'Caneca', preco: 1.5 };
Object.defineProperty(produto, 'nome', {
  writable: false,
  configurable: false
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
produto.nome = 'Troca de nome';
delete produto.preco;
console.log(produto);

***************************************************************************

const produto = { nome: 'Caneca', preco: 1.5 };
const outroProduto = produto;

outroProduto.nome = 'Magno V Gomes';
outroProduto.preco = 2.5;
// produto.nome = 'Magno V Gomes';
console.log(produto);
console.log(outroProduto);
*/