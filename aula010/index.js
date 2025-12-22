/* AULA 10 - Operadores Aritméticos e de Atribuição
*/

let num1 = 10;
let num2 = 5;

// --- 1. Operadores Aritméticos Básicos ---

// Adição (+)
let soma = num1 + num2; 
console.log("Adição:", soma); // Resultado: 15

// Subtração (-)
let subtracao = num1 - num2; 
console.log("Subtração:", subtracao); // Resultado: 5

// Multiplicação (*)
let multiplicacao = num1 * num2; 
console.log("Multiplicação:", multiplicacao); // Resultado: 50

// Divisão (/)
let divisao = num1 / num2; 
console.log("Divisão:", divisao); // Resultado: 2

// Módulo (%) -> Resto da divisão
let resto = num1 % 3; 
console.log("Módulo (Resto de 10/3):", resto); // Resultado: 1

// Potenciação (**) -> Base elevado ao expoente
let potencia = num1 ** 2; 
console.log("Potenciação (10²):", potencia); // Resultado: 100


// --- 2. Incremento e Decremento ---
// Nota: Usamos 'let' pois o valor da variável é alterado

let contador = 10;

// Incremento (++) -> Adiciona 1
contador++; 
console.log("Incremento:", contador); // Resultado: 11

// Decremento (--) -> Subtrai 1
contador--; 
console.log("Decremento:", contador); // Resultado: 10 (voltou ao original)


// --- 3. Operadores de Atribuição (Composta) ---
// Servem para resumir operações (ex: valor = valor + 5)

let valor = 100; // Atribuição simples (=)

valor += 10; // Atribuição de adição (mesmo que: valor = valor + 10)
console.log("Atribuição com Soma (+=):", valor); // 110

valor -= 10; // Atribuição de subtração
console.log("Atribuição com Subtração (-=):", valor); // 100

valor *= 2; // Atribuição de multiplicação
console.log("Atribuição com Multiplicação (*=):", valor); // 200

valor /= 2; // Atribuição de divisão
console.log("Atribuição com Divisão (/=):", valor); // 100

// --- 4. Concatenação de Strings Numéricas (Cuidado!) ---
// Quando usamos aspas, o JS entende como texto, não como número.
// O operador + junta os símbolos ao invés de somar os valores.

let numeroTexto1 = '10';
let numeroTexto2 = '5';

let resultadoConcatenacao = numeroTexto1 + numeroTexto2;

console.log("Concatenação ('10' + '5'):", resultadoConcatenacao); 
// Resultado: "105" (Tipo String)
// Se fosse soma matemática, seria 15.


// Exemplo Misto (Número + String)
// Se UM dos lados for string, tudo vira string.
let exemploMisto = 10 + '5';
console.log("Número 10 + String '5':", exemploMisto);
// Resultado: "105"

// --- 5. NaN - Not a number, parseInt (inteiro), parseFloat(decimais)
// NaN -> sua conta não bateu, algo deu errado
const nu1 = 10;
const nu2 = Number('Magno'); // aqui sairá um NaN

console.log(nu1 + nu2);
console.log(typeof nu2);

// FORMAS de conversão de números em Java

// const n1 = 10;
// const n2 = '5'; conversão foi automática pelo próprio java
// console.log(n1 * n2); -> 50

// const n1 = 10;
// const n2 = parseInt('5'); -> convertendo para Number sem precisar do java
// console.log(n1 * n2); -> 50

// const n1 = 10;
// const n2 = parseInt('5.2'); -> converte apenas a parte inteira
// console.log(n1 + n2); -> 15

// const n1 = 10;
// const n2 = parseFloat('5.2'); -> converte tb as casas decimais
// console.log(n1 + n2); -> 15.2

// const n1 = 10;
// const n2 = Number('5'); -> converte a variável completa
// console.log(n1 + n2); -> 15

// const n1 = 10;
// const n2 = Number('5.2'); -> converte a variável completa
// console.log(n1 + n2); -> 15.2

