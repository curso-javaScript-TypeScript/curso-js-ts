function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaTime(msg, tempo) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject(new Error('ERRO'));
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

esperaTime('Conexão com base de dados.', rand(1, 3))
  .then(resposta => {
    console.log(resposta);
    return esperaTime('Buscando base de dados.', rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
    return esperaTime(1950, rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
    return esperaTime('Exibir resultado da base de dados.', rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta);
  }) 
  .catch(e => {
    console.log('ERRO:', e);
  });

  console.log('Será exibido primeiro, apesar de ser a última linha do código.\n');
  
  
  /*
  *************** Modo moderno do Callback com then() <- câmbio automático ********************
  
  function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  function esperaTime(msg, tempo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(msg);
      }, tempo);
    });
  }
  
  esperaTime('Conexão com base de dados.', rand(1, 3))
    .then(resposta => {
      console.log(resposta);
      return esperaTime('Buscando base de dados.', rand(1, 3));
    })
    .then(resposta => {
      console.log(resposta);
      return esperaTime('Tratando base de dados.', rand(1, 3));
    })
    .then(resposta => {
      console.log(resposta);
      return esperaTime('Exibir resultado da base de dados.', rand(1, 3));
    })
    .then(resposta => {
      console.log(resposta);
    }) 
    .catch();
  
    console.log('Será exibido primeiro, apesar de ser a última linha do código.\n');

//////////////////////////////////////////////////////////////////////////////////////////

  function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaTime(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}
  esperaTime('Esperar parte 1', rand(1, 3))
    .then(resposta => {
      console.log(resposta);
      return esperaTime('Esperar parte 2', rand(1, 3));
    })
    .then(resposta => {
      console.log(resposta);
      return esperaTime('Esperar parte 3', rand(1, 3));
    })
    .then(resposta => {
      console.log(resposta);
    })
    .then(() => {
      console.log('Última parte do teste then().');
    }) 
    .catch();

*************** Modo antigo do Callback() <- câmbio manual ********************

function rand(min, max) {
 min *= 1000;
 max *= 1000;
 return Math.floor(Math.random() * (max - min) + min);
}


function esperaTime(msg, tempo, callback) {
 setTimeout(() => {
   console.log(msg);
   if(callback) callback();
 }, tempo);
}
esperaTime('Espera aleatória 1', rand(1, 3), function() {
 esperaTime('Espera aleatória 2', rand(1, 3), function() {
   esperaTime('Espera aleatória 3', rand(1, 3));
 });
});
*/
