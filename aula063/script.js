// Índices       -6       -5        -4      -3        -2        -1         
// Índices        0        1         2       3         4         5          
const nomes = ['Magno', 'Neusa', 'Arthur', 'Gael', 'Heloísa', 'Isaac'];

// unshift
nomes.splice(1, 0, 'Serena');
console.log(nomes);





/*
splice(índice altual, delete, elem1, elem2, elem3);

const removidos = nomes.splice(5, 0, 'Serena');
const removidos = nomes.splice(4, 2, 'Serena');
console.log(nomes, removidos);

*****************************************

const removidos = nomes.splice(-2, 2);
const removidos = nomes.splice(-2, 1);
const removidos = nomes.splice(-1, 1);
console.log(nomes, removidos);
console.log(Number.MAX_VALUE);

***************************************

const removidos = nomes.splice(5, 1);
const removidos = nomes.splice(4, 2);
console.log(nomes, removidos);

*************************************************

push

nomes.splice(6, 0, 'Serena');
console.log(nomes);

********************************

shift

const removidos = nomes.splice(0, 1);
console.log(nomes, removidos);

****************************************

pop

const removidos = nomes.splice(-1, 1);
console.log(nomes, removidos);
*/