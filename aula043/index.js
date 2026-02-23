/*
Escreva uma função que recebe um número e
retorne o seguinte:
Número é divisível por 3 = Fizz
Número é divisível por 5 = Buzz
Número é divisível por 3 ou 5 = FizzBuzz
Número NÃO é divisível por 3 ou 5 = Número
*Checar se o número é realmente um número
Use a função com números de 0 a 100
*/
function FizzBuzz(num) {
  if (typeof num !== 'number') return num;
  if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
  if (num % 3 === 0) return 'Fizz';
  if (num % 5 === 0) return 'Buzz';
  return num;
}

console.log('a', FizzBuzz('a'));
for (let i = 0; i <=50; i++) {
  console.log(i, FizzBuzz(i));
}