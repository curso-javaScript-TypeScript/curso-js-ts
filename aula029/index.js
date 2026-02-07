function getDayWeekText(diaSemana) {
  let diaSemanaTexto;

  switch (diaSemana) {
    case 0:
      diaSemanaTexto = "Domingo";
      return diaSemanaTexto;
    case 1:
      diaSemanaTexto = "Segunda-feira";
      return diaSemanaTexto;
    case 2:
      diaSemanaTexto = "Terça-feira";
      return diaSemanaTexto;
    case 3:
      diaSemanaTexto = "Quarta-feira";
      return diaSemanaTexto;
    case 4:
      diaSemanaTexto = "Quinta-feira";
      return diaSemanaTexto;
    case 5:
      diaSemanaTexto = "Sexta-feira";
      return diaSemanaTexto;
    case 6:
      diaSemanaTexto = "Sábado";
      return diaSemanaTexto;
    default:
      diaSemanaTexto = "Dia da semana está errado!!";
  }
}

const data = new Date("1974-03-26 12:15:00");
let diaSemana = data.getDay();
const diaSemanaTexto = getDayWeekText(diaSemana);

console.log(diaSemana, diaSemanaTexto);

/*
switch (diaSemana) {
  case 0:
    diaSemanaTexto = 'Domingo';
    break;
  case 1:
    diaSemanaTexto = 'Segunda-feira';
    break;
  case 2:
    diaSemanaTexto = 'Terça-feira';
    break;
  case 3:
    diaSemanaTexto = 'Quarta-feira';
    break;
  case 4:
    diaSemanaTexto = 'Quinta-feira';
    break;
  case 5:
    diaSemanaTexto = 'Sexta-feira';
    break;
  case 6:
    diaSemanaTexto = 'Sábado';
    break;
  default:
    diaSemanaTexto = 'Dia da semana está errado!!'
}

console.log(diaSemana, diaSemanaTexto);

****************************************************

if (diaSemana === 0) {
  diaSemanaTexto = 'Domingo';
} else if (diaSemana === 1) {
  diaSemanaTexto = 'Segunda-feira';
} else if (diaSemana === 2) {
  diaSemanaTexto = 'Terça-feira';
} else if (diaSemana === 3) {
  diaSemanaTexto = 'Quarta-feira';
} else if (diaSemana === 4) {
  diaSemanaTexto = 'Quinta-feira';
} else if (diaSemana === 5) {
  diaSemanaTexto = 'Sexta-feira';
} else if (diaSemana === 6) {
  diaSemanaTexto = 'Sábado';
} else {
   diaSemanaTexto = 'Dia inexistente' 
}
console.log(diaSemana, diaSemanaTexto);
*/
