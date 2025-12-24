// ********** PADRÃO IEEE 754-2008 **********//

let num1 = 0.7022254; //Number
let num2 = 0.1; //Number

// num1 = ((num1 * 100) + (num2 * 100)) / 100; //-> 0.8
// num1 = ((num1 * 100) + (num2 * 100)) / 100; //-> 0.9
// num1 = ((num1 * 100) + (num2 * 100)) / 100; //-> 1.0

// num1 = Number(num1.toFixed(2));

console.log(num1.toFixed(2));
console.log(Number.isInteger(num1));

// num1 += num2; // num1 = num1 + num2; -> 0.8
// num1 += num2; // num1 = num1 + num2; -> 0.9
// num1 += num2; // num1 = num1 + num2; -> 1.0
// num1 += num2; // num1 = num1 + num2; -> 1.1
// num1 += num2; // num1 = num1 + num2; -> 1.2
// num1 += num2; // num1 = num1 + num2; -> 1.3
// num1 += num2; // num1 = num1 + num2; -> 1.4
// num1 += num2; // num1 = num1 + num2; -> 1.5
// num1 += num2; // num1 = num1 + num2; -> 1.6
// num1 += num2; // num1 = num1 + num2; -> 1.7
// num1 += num2; // num1 = num1 + num2; -> 1.8
// num1 += num2; // num1 = num1 + num2; -> 1.9
// num1 += num2; // num1 = num1 + num2; -> 2.0

// num1 = num1.toFixed(2);
// num1 = parseFloat(num1.toFixed(2));

// console.log(num1);
// console.log(Number.isInteger(num1)); // false
// console.log(Number.isInteger(1.00)); // True



// let num1 = 1;
// let num2 = 2.5;

// console.log(num1.toString() + num2); ouve uma conversão do num1
// console.log(typeof num1); a variável continua Number, mas
// devido a conversão no console haverá a concatenação entre uma strig e um numero

// num1 = num1.toString(); agora aqui estamos convertendo a variável realmente
// console.log(typeof num1);

// conhecendo a representação binária de um Number -> toString(2)
// let num1 = 10;
// let num2 = 2.5;
// console.log(num1.toString(2));
// console.log(num2.toString(2));

// arredondando Number para casas decimais que eu escolher
// let nu1 = 10.578955125547;
// let nu2 = 2.5;
// console.log(nu1.toFixed(2)); // -> nu1 sai de 12 para 2 casas decimais

// conhecendo se um Numero é inteiro ou não -> True / false
// console.log(Number.isInteger(nu1));
// console.log(Number.isInteger(num1));


// saber se a operação é aceita ou será NaN->(não é um número)
// let temporario = num1 * 'ola';
// console.log(Number.isNaN(temporario));





