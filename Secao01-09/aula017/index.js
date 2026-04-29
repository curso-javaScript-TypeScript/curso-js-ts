const raiz = n => Math.sqrt(n);

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
console.log(raiz(36));

/* 
const raiz = (n) => {
  return Math.sqrt(n);
};

const raiz = function (n) {
  return Math.sqrt(n);
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
console.log(raiz(36));

AQUI AS FUNÇÕES NÃO PRECISAM DO ';' já quando a função vem pós variável precisa

function agradecimento(nome) {
  function soma(x, y) {
    const resultado = x + y;
    return resultado;
  }
  
  console.log(soma(4, 6));
  console.log(soma(40, 60));
  console.log(soma(9999, 88888));

return `Deus é fiel, nunca se esqueça ${nome}`;
}

const variavel = agradecimento('Magno');
console.log(variavel);
agradecimento('Magno');
agradecimento('Neusa');
agradecimento('Mariana');
*/