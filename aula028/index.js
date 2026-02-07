/*
const data = new Date(0); -> 01/01/1970 TimesTamp unix ou época unix (marco zero) 

const MarcoZero = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + MarcoZero - umDia);
const data = new Date(0 + MarcoZero + umDia);
console.log(data.toString());

const data = new Date(2026, 1, 7, 15, 53, 45); -> ano, mês, dia, hora, min, seg.

const data = new Date('2026-02-07 16:20:48.999');
console.log(data.toString());

const data = new Date(1770494230790);

console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('miniseg', data.getMilliseconds());
console.log('Dia semana', data.getDay());

console.log(Date.now());
*/

function zeroAEsquerda (num) {
  return num >= 10 ? num : `0${num}`;
}

function formatarData(data){
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formatarData(data);
console.log(dataBrasil);