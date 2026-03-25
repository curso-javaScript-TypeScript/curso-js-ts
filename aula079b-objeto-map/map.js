const pessoas = [
  {id: 3, nome: 'Magno'},
  {id: 2, nome: 'Neusa'},
  {id: 1, nome: 'Arthur'},
];

const novasPessoas = new Map();
for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, { ...pessoa });
}
// console.log(novasPessoas.get(3));

for (const pessoas of novasPessoas) {
  console.log(pessoas);
}

console.log();

for (const pessoas of novasPessoas.values()) {
  console.log(pessoas);
}

console.log();

for (const pessoas of novasPessoas.keys()) {
  console.log(pessoas);
}


// for (const [identificador, { id, nome } ] of novasPessoas) {
//   console.log(identificador, id, nome);
// }


/*
const novasPessoas = {};
for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas[id] = { ...pessoa };
}

console.log(novasPessoas);

***********************************************

const novasPessoas = {};
for (const { id, nome } of pessoas) {
  console.log(id, nome);
}
*/

