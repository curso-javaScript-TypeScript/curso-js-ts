//Flag 'g' - global (encontra todas as ocorrências)
//Flag 'i' - insensitive (checa casos com letras maiúsculas e minusculas)
// grupos com ( )
// | ou

const { texto } = require("./base");

const regExp1 = /(neusa|magno|joão|maria)(, hoje sua esposa)/i;
const found = regExp1.exec(texto);

if (found) {
  console.log(found[0]);
  console.log(found[1]);
  console.log(found[2]);
}

/* exemplos e testes de RegExp

***************** OU  *************************

const { texto } = require("./base");

const regExp1 = /(neusa|magno)(, hoje sua esposa)/i;
const found = regExp1.exec(texto);

console.log(found[0]);
console.log(found[1]);
console.log(found[2]);

***************** GRUPOS  *************************

const { texto } = require("./base");

const regExp1 = /(Teve )(5 filhos)/gi;

console.log(regExp1.exec(texto));


*****************  EXEC  *************************

const { texto } = require("./base");

const regExp1 = /Teve 5 filhos/gi;

console.log(regExp1.exec(texto)[0]);
console.log(regExp1.exec(texto)[0].index);

*****************  TEST  *************************

const regExp1 = /Magno/i;
const regExp1 = /Magno/gi;

const regExp1 = /Teve 5 filhos/gi; <- True
const regExp1 = /Teve 5    filhos/gi; <- False

console.log(regExp1.test(texto));
*/
