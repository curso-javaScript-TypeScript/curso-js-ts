/*
************* ESTRUTURAS CONDICIONAIS -> IF, ELSE IF e ELSE **************
If pode ser usado sozinho
Sempre que utilizo a palavra else, preciso de um if antes
Eu posso ter vários else ifs na checagem
Só posso ter um else na checagem
Podemos usar condições sem else if, utilizando apenas if e else


const hora = 10;

if (hora < 12) {
  console.log('Bom dia!!');
}

if (hora > 12) {
  console.log('Bom dia!!');
}
Entre 0 - 11 -> Bom dia
Entre 12 - 17 -> Boa tarde
Entre 18 - 23 -> Boa noite



const hora = 50;

if (hora >= 0 && hora <= 11) {
  console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
  console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23) {
  console.log('Boa noite');
} else {
  console.log('Olá');
}


const tenhoGrana = true;
const tenhoGrana = false;

if (tenhoGrana) {
  console.log('Vou curtir hoje!');
} else {
  console.log('Sou obrigado a ficar em casa');
}
*/

const tenhoGrana = 'Magno V Gomes';

if (tenhoGrana) {
  console.log('Vou curtir hoje!');
}