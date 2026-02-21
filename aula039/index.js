function random(min, max) {
  const x = Math.random() * (max - min) + min;
  return Math.floor(x);
}

const min = 1;
const max = 50;
let numAleatorio = 10;
// let numAleatorio = random (min, max);

while (numAleatorio !== 10) {
  numAleatorio = random(min, max);
  console.log(numAleatorio);
}

console.log('*************\n');


do {
  // numAleatorio = random(min, max);
  console.log(numAleatorio);
} while(numAleatorio !== 10);

console.log('\nContinua após o loop');


/*
const nome = 'Magno';
let i = 0;

while (i < nome.length) {
  console.log(nome[i]);
  i++;
}


let i = 0;

while (i <= 10) {
  console.log(i);
  i++;
}
*/