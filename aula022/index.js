/*
***** Operadores Lógicos *****
&& -> AND -> E -> todas expressões precisam ser verdadeiras para retornar True
console.log(true && true && true && true)
console.log(true && false && true && true)
const expressaoAnd = true && true && true && true;
const expressaoAnd = true && false && true && true;
console.log(expressaoAnd)

|| -> OR  -> OU -> Só retorna false se todas as expressões forem falsas
// const expressaoOr = true || false || false || false;
// const expressaoOr = false || true || true || true;
// const expressaoOr = true || true || true || true;
const expressaoOr = false || false || false || false;
console.log(expressaoOr);

!  -> NOT -> NÃO -> inverte o valor da afirmação, ou seja, negação
console.log(!true);
console.log(!false);

*/
console.log(!true);
console.log(!false);