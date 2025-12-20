/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1995
*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;

let imc; // peso dividido por altura vezes altura
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2025 - idade;

// forma tradicional
console.log(nome, sobrenome, 'tem',idade,'anos, pesa', peso,
    'kg tem', altura, 'de altura e seu IMC é de', imc,
    nome,'nasceu em', anoNascimento)

// aqui o '+' é uma concatenação entre dois valores
console.log(nome + ' ' + sobrenome + ' tem ' + idade +' anos, pesa ' + peso +
    ' kg tem ' + altura + 'de altura e seu IMC é de ' + imc + ' ' 
    + nome + ' nasceu em ' + anoNascimento)

// templace strings forma moderna para os tempos atuais
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);