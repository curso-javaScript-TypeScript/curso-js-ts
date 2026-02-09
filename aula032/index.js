// ... rest -> resto / ... spread -> espalha

// indice array       0          1          2
// indice normal   0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [lista1, lista2, lista3] = numeros;

console.log(lista3[2]);




/*
const [ , [ , ,seis], [ sete, , nove ]] = numeros;
console.log(seis, sete, nove);


const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
console.log(numeros[1][2], numeros[2][1]);


indíce            0  1   2   3   4   5   6    7  8
const numeros = [11, 22, 33, 14, 25, 56, 37, 88, 49];
const [um, , tres, , cinco, , sete] = numeros;
console.log(um, tres, cinco, sete);


const [um, dois, tres, ...resto] = numeros;
console.log(um, dois, tres);
console.log(resto);


let a = "A"; // B
let b = "B"; // C
let c = "C"; // A

// const numeros = [1, 2, 3];
// const numeros = [b, c, a];
const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);
*/
