function retornaFuncao(nome) {
  return function() {
    return nome;
  };
}
const funcao = retornaFuncao('Magno');
const funcao2 = retornaFuncao('Neusa');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(),funcao2());

/*
function retornaFuncao() {
  const nome = 'Magno';
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao();
console.log(funcao);
*/