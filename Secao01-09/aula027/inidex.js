// Condição -> ? <- 'Valor para verdadeiro -> : <- 'Valor para falso'
const pontuacaoUsuario = 500;
// const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'usuário normal';

const corUsuario = null;
// const corUsuario = '/ Pink';
const corPadrao = corUsuario || '/ Azul';
console.log(nivelUsuario, corPadrao);




/* 
if (pontuacaoUsuario >= 1000) {
   console.log ('Usuário VIP');
} else {
  console.log ("usuário normal.");
}
*/


