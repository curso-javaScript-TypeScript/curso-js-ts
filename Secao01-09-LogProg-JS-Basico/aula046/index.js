function mostrarHora() {
  let data = new Date();

  return data.toLocaleTimeString('pt-BR');
}

 const tempo = setInterval(function () {
  console.log(mostrarHora());
}, 1000);

setTimeout(function() {
  clearInterval(tempo);
}, 3000);

setTimeout(function() {
  console.log('\nDeus é fiel!!!');
}, 5000);




/* 
setTimeout(function() {
  clearInterval(tempo);
}, 10000);

 ****** intervalo de tempo ******
setInterval(function () {
  console.log(mostrarHora());
}, 5000);
*/
