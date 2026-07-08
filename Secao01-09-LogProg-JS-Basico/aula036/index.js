
const pessoa = {
  nome: 'Magno',
  sobrenome: 'V Gomes',
  idade: 51
};

for (let atributo in pessoa) {
  console.log(atributo, pessoa[atributo]);
}



/*
**** For 'in' => lê os índices ou chaves do objeto ****

indices ---------> 0       1         2
const frutas = ['Jaca', 'Manga', 'Abacaxi'];

for (let tipos in frutas) {
  console.log(frutas[tipos]);
}

 for (let i = 0; i < frutas.length; i++) {
   console.log(frutas[i]);
 }
*/