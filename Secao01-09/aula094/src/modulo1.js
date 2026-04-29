export const nome = 'Magno';
export const sobrenome = 'V Gomes';
export const idade = 52;

export function soma(x, y) {
  return x + y;
}

export default class Pessoa { 
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  } 
}



/*  
****** EXEMPLOS E TESTES DA AULA ******

const nome = 'Magno';
const sobrenome = 'V Gomes';
const idade = 52;

function soma(x, y) {
  return x + y;
}

export default (x, y) => x * y;

export { nome, sobrenome, idade, soma };

########################################################

const nome = 'Magno';
const sobrenome = 'V Gomes';
const idade = 52;

function soma(x, y) {
  return x + y;
}

export { nome, sobrenome, idade, soma as default };

###########################################################

export const nome = 'Magno';
export const sobrenome = 'V Gomes';
export const idade = 52;

export default function soma(x, y) {
  return x + y;
}

########################################################

export const nome = 'Magno';
export const sobrenome = 'V Gomes';
export const idade = 52;

export function soma(x, y) {
  return x + y;
}

####################################################

export const nome = 'Magno';
export const sobrenome = 'V Gomes';
export const idade = 52;

export function soma(x, y) {
  return x + y;
}

export class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

##################################################

const nome = 'Magno';
const sobrenome = 'V Gomes';
const idade = 52;

function soma(x, y) {
  return x + y;
}

export { nome as nome2, sobrenome, idade, soma };

export { nome, sobrenome, idade, soma };
*/
