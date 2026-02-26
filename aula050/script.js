const conta = (...args) => {
  console.log(args);
};
conta('+', 1, 20, 30, 40, 50);


/*
const conta = function conta(operador, acumulador, ...numeros) {
  for(let numero of numeros) {
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '*') acumulador *= numero;
    if (operador === '/') acumulador /= numero;
  }
  
  console.log(acumulador);
};
conta('+', 1, 20, 30, 40, 50);
conta('-', 1, 20, 30, 40, 50);
conta('*', 1, 20, 30, 40, 50);
conta('/', 1, 20, 30, 40, 50);

************ desestruturação de array *******************
function funcao( [valor1, valor2, valor3] ) {
  console.log(valor1, valor2, valor3);
}
funcao(['Magno', 'V Gomes', 52]);

************ desestruturação normal **********************
function funcao({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}
let obj = { nome: 'Magno', sobrenome: 'V Gomes', idade: 52 };
funcao(obj);

************************************************************
a palavra arguments que sustenta todos os argumentos enviados
************************************************************
function funcao(a, b = 2, c = 4) {
  // b = b || 0;
  console.log(a + b + c);
}
funcao(2, undefined, 20); -> agora com undefined o valor de b = 2 é aceito
funcao(2, 0, 20); -> aqui ele ainda não aceitou o valor do b sendo 2
funcao(2, '', 20); -> aqui concatenou = 2 20
funcao(2, 10, 20); -> aqui a soma é 32, não pegou nenhum valor da funcao


function funcao(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f);
}
funcao(1, 2, 3); -> aqui o valor é definido como undefined (indefinido)
funcao(1, 2, 3, 4, 5 ,6, 7); -> aqui como sobrou imprime até o 6.


function funcao() {
  let soma = 0;
  for (let Argumento of arguments) {
    soma += Argumento;
  }
  console.log(soma);
}
funcao(1, 2, 3, 4, 5 ,6, 7);


function funcao() {
  // console.log('Deus é fiel!!');
  console.log(arguments);
}
funcao('Argumento', 'Valor', 1, 2, 3, 4, 5);
*/
