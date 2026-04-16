// Continue continua para próxima iteração
// Break sai do laço imediatamente
// Ambos funcionam em: for clássico, for in, for of
// while (tendo cuidado para atualizar antes) e Do while

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0;
while (i < numeros.length) { 
  let numero = numeros[i];

  if (numero === 2) {
    console.log(`Pulei o número ${numero}`);
    i++;
    continue;
  }

  console.log(numero);

  if (numero === 6) {
console.log(`${numero} encontrado, saindo...`);
    i++;
    break;
  }

  i++;
}

console.log('\n**************\n');


const nums = [10, 20, 30, 40, 50, 60, 70, 80, 90];

let x = 0;
do {
  let num = nums[x];

  if (num === 30) {
    console.log(`Pulei o número ${num}`);
    x++;
    continue;
  }

  console.log(num);

  if (num === 70) {
console.log(`${num} encontrado, saindo...`);
    x++;
    break;
  }

  x++;
} while (x < nums.length);