// return -> Retorna um valor e termina a função basicamente
function multiplicadores(multipliclador) {
  // multiplicador
  return function(num) {
    return num * multipliclador;
  };
}

const duplica = multiplicadores(2);
const triplica = multiplicadores(3);
const quadriplica = multiplicadores(4);

console.log(duplica(2), triplica(3), quadriplica(4));


// function duplica(num) {
//   return num * 2;
// }

// function triplica(num) {
//   return num * 3;
// }

// function quadriplica(num) {
//   return num * 4;
// }





/*
AQUI TEMOS FUNÇÕES ANINHADAS -> função complexa de entender
function iniciarFrase(inicio) {

  function terminarFrase(final) {
    return inicio + ' ' + final;
  }

  return terminarFrase;
}

const iniciar = iniciarFrase('Deus');
const finalizar = iniciar('é fiel!!\n');
console.log(finalizar);

const fraseTotal = iniciarFrase('Deus');
console.log(fraseTotal('é fiel!!'));

**********************************************************

AQUI A FUNÇÃO FEZ O TRABALHO DE CRIAR OS OBJETOS, FACILITANDO O CÓDIGO

function criaPessoa(nome, sobrenome) {
  return { nome, sobrenome };
}
const pessoa1 = criaPessoa('Magno', 'V Gomes');
const pessoa2 = { nome: 'Neusa', sobrenome: 'Silva'};

console.log(pessoa1, pessoa2);

*********************************************************

AQUI A FUNÇÃO NÃO RETORNA VALOR -> mas tem valor ao mudar a cor ao clicar

document.addEventListener('click', function() {
  document.body.style.backgroundColor = 'blue';
});
**********************************************************

AQUI O RETURN TRADICIONAL -> imprime o valor do return
function soma(a, b) {
  return a + b;
}
console.log(soma(5, 3));

**********************************************************

AQUI COMO NÃO TEM RETURN; A FUNÇÃO NÃO SERVE / imprime o console apenas

function soma2(a, b) {
  console.log(a + b);
}
soma2(5, 3);

*/ 