function rand(min=0, max=3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaTime(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof msg !== 'string') {
        reject('CAI NO ERRO');
        return;
      }

      resolve(msg.toLowerCase() + ' - Passei na promise.');
      return;
    }, tempo);
  });
}
/*
esperaTime('Fase 1', rand())
  .then(valor => {
    console.log(valor);
    return esperaTime('Fase 2', rand());
  })
  .then(fase => {
    console.log(fase);
    return esperaTime('Fase 3', rand());
  })
  .then(fase => {
    console.log(fase);
    return fase;
  })
  .then(fase => {
    console.log('Fase final:', fase);
  })
  .catch(e => console.log(e));
*/
async function executa() {
  try {
    const fase1 =  esperaTime('Fase 1', rand());
    console.log(fase1);
  
    const fase2 = await esperaTime('Fase 2', rand());
    console.log(fase2);
    // const fase3 = await esperaTime(3, rand());
    const fase3 = await esperaTime('Fase 3', rand());
    console.log(fase3);
  
    console.log('Fase final:', fase3);
  } catch(e) {
    console.log(e);
  }
}
executa();
/*
     3 tipos de erros do promise 

Pending  (Pendente)   -> new Promise(...) -> Aguardando...
Fulfilled (Resolvida) -> resolve(valor)   -> Vai para o .then() ou await
Rejected (Rejeitada)  -> reject(erro)     -> Vai para o .catch() ou try/catch
*/

