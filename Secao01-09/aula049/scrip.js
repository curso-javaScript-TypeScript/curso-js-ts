// Declaração de função tradicional -> Function hoisting 
// Função pode vir primeiro ou depois do bloco
falaOi();

function falaOi() {
  console.log('Deus é fiel!!');
}

// First-class objects -> Objetos de primeira classe
// Function expression
const souUmDado = function() {
  console.log('Sou um dado.');
};
souUmDado();

// Arrow function -> função mais usada nos dias de hoje
const funcaoArrow = () => {
  console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto
const obj = {
  falar() {
    console.log('Estou falando...');
  }
};
obj.falar();