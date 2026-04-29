const pessoa = {
  nome: 'Magno',
  sobrenome: 'V Gomes'
}

// For clássico -> Geralmente com iteráveis (array ou string)
// For in -> Retorna o índice ou chave (string, array ou objetos)
// For of -> Retorna o valor em si (interáveis, arrays ou strings)

for (let valor in pessoa) {
  console.log(valor, pessoa[valor]);
}
// console.log(pessoa);



/*

//indices     0123....
const nome = 'Magno V Gomes';
//indices         0        1         2
const nomes = ['Magno', 'Neusa', 'Samuka'];

for (let i of nome) {
  console.log(i);
}

console.log('\n####\n');

// **** usando função para a mesma ação ****
nomes.forEach(function(valor) {
  console.log(valor);
})

console.log('\n####\n');

// **** for of ****
for (let i of nomes) {
  console.log(i);
}

console.log('\n####\n');

// **** for in ****
for (let i in nomes) {
  console.log(nomes[i]);
}

console.log('\n####\n');

// **** for Clássico ****
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

*/