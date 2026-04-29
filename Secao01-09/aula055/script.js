// IIFE -> Immediately invoked function expression
(function(idade, raca, altura) {
  
    const sobrenome = 'V Gomes';
    function criaNome(nome) {
      return nome + ' ' + sobrenome;
    }

    function chamaNome() {
      console.log(criaNome('Magno'));
    }
    
    chamaNome();
    console.log(idade, raca, altura);

})(51, 'preto', 1.82);


/*
*********** SEM PARAMÊTROS ***************
(function() {

    const sobrenome = 'V Gomes';
    function criaNome(nome) {
      return nome + ' ' + sobrenome;
    }

    function chamaNome() {
      console.log(criaNome('Magno'));
    }
    
    chamaNome();

})();
(function() {
    const nome = 'Neusa';
    console.log(nome);
})();



const nome = 'Magno';
console.log(nome);

function imediata() {
  console.log('Deus é fiel!!');
}
imediata();
*/
