function relogio() {
  function tempoSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', { timeZone: 'GMT'});
  }

  const relogio = document.querySelector('.relogio');
  let segundos = 0;
  let timer;
  
  function iniciaRelogio() {
    timer = setInterval(function() {
      segundos++;
      relogio.innerHTML = tempoSegundos(segundos);
    }, 1000);
  }
  
  document.addEventListener('click', function(e) {
    const elem = e.target;
    
    if(elem.classList.contains('iniciar')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      iniciaRelogio();  
    }
    
    if(elem.classList.contains('pausar')) {
      clearInterval(timer);
      relogio.classList.add('pausado');
    }  
      
    if(elem.classList.contains('zerar')) {
      clearInterval(timer);
      relogio.innerHTML = '00:00:00';
      relogio.classList.remove('pausado');
      segundos = 0;
    }
  });
}
relogio();