// Índices        0        1         2       3         4         5          
// const nomes = ['Magno', 'Neusa', 'Arthur', 'Gael', 'Heloísa', 'Isaac'];

const nomes = [ 'Magno', 'Vargas', 'Gomes' ];
const nome = nomes.join(' ');
console.log(nome);

/*
const nome = 'Magno, Vargas, Gomes';
const nomes = nome.split(', ');
console.log(nomes);

****************************************

const nomes = ['Magno', 'Neusa', 'Arthur', 'Gael', 'Heloísa', 'Isaac'];
const novo = nomes.slice(1, -2);
// const novo = nomes.slice(0, -1);
console.log(novo);

****************************************

const nomes = ['Magno', 'Neusa', 'Arthur'];
nomes.unshift('Isaac'); -> adiciona diretamente no ínicio
nomes.unshift('Gael'); -> adiciona diretamente no ínicio
console.log(nomes);

***************************************

const nomes = ['Magno', 'Neusa', 'Arthur'];
const adiciona = nomes.push('Isaac); -> cria um índice
const removido = nomes.shift(); -> primeiro índice
const removido = nomes.pop(); -> último índice
console.log(nomes, removido);

*****************************************************

const nomes = ['Magno', 'Neusa', 'Arthur'];
const nomes = ['Magno', 'Neusa', 'Arthur'];
const novo = [...nomes];

novo.pop();
console.log(nomes);
console.log(novo);

*******************************************

const novo = nomes;

novo.pop();
console.log(nomes);

*****************************************************
 
// String, Objetos, Funções, Números
const nomes = new Array('Magno', 'Neusa', 'Arthur');
nomes[2] = 'Isaac';
console.log(nomes);

*****************************************************

const nomes = ['Magno', 'Neusa', 'Arthur'];
nomes[2] = 'Isaac';
delete nomes[1];
console.log(nomes);

**********************************************

const nomes = ['Magno', 'Neusa', 'Arthur'];
nomes[2] = 'Isaac';
console.log(nomes);
*/
