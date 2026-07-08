const { texto } = require("./base");
const regExp1 = /Magno|Neusa/gi;

// console.log(texto);
// console.log(texto.match(regExp1));
console.log(texto.replace(/(Magno|Neusa)/gi, '<b>"$1"</b>'));

/* exemplos e testes de RegExp

(...( () ) )(...)(...)  $1 $2 $3 $4 $5

const regExp1 = /Magno/gi;

console.log(texto);

console.log(texto.match(regExp1));

console.log(texto.replace(/Magno/gi|Neusa, 'Felipe'));
console.log(texto.replace(/Magno|Neusa/gi, 'Felipe'));

console.log(texto.replace(/(Magno|Neusa)/gi, '"$1"'));

console.log(texto.replace(/(Magno/gi|Neusa), '<b>$1</b>'));
console.log(texto.replace(/(Magno|Neusa)/gi, '<b>$1</b>'));

console.log(texto.replace(/(Magno|Neusa)/gi, '<b>$1</b>'));
console.log(texto.replace(/(Magno|Neusa)/gi, function(input) {
  return ' ############## ' + input.toUpperCase() + ' ############## ';
}));

*/
