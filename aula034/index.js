/*
console.log('Linha 0');
console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
console.log('Linha 5');

for (let i = 80; i <= 100; i++) {
  console.log(`Linha ${i}`);
}

for (let i = 10; i <= 100; i += 10) {
  console.log(`Linha ${i}`);
}

for (let i = -50; i <= 100; i += 10) {
  console.log(`Linha ${i}`);
}

for (let i = 500; i >= 400; i -= 10) {
  console.log(`Linha ${i}`);
  
  for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'ímpar';
    console.log(i, par);
  }
  
  // indíce          0       1        2
  const frutas = ['Maçã', 'Pêra', 'Banana'];
  
  for (let i = 0; i < frutas.length; i++) {
    console.log(i);
  }
*/

// indíce          0       1        2
const frutas = ['Maçã', 'Pêra', 'Banana',
//  3        4         5         6  
  'Uva', 'Abacaxi', 'Manga', 'Morango'];

for (let i = 0; i < frutas.length; i++) {
  console.log(`Índice ${i}`, frutas[i]);
}