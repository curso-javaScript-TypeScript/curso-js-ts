/* Promise.all Promisse.race Promice.resolve Promise.reject
############# Promise.all ##############
*/
function esperaTime(msg, tempo) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') {
      reject('***** Aqui acontecerá o ERRO *****');
      return;
    }

    setTimeout(() => {
      resolve(msg.toUpperCase() + '- Passei na promise,');
    }, tempo);
  });
}

const promises = [
  'Primeiro valor',
  esperaTime('Promise 1', 3000),
  esperaTime('Promise 2', 500),
  esperaTime('Promise 3', 1000),
  esperaTime(1000, 1000),
  'Sem Promise.'
];

Promise.all(promises)
.then(function(valor) {
  console.log(valor);
})
.catch(function(erro) {
  console.log(erro);
});

/*
############# Promise.race ##############
function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaTime(msg, tempo) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') {
      reject('***** Aqui acontecerá o ERRO *****');
      return;
    }

    setTimeout(() => {
      resolve(msg.toUpperCase() + ' - Passei na promise!');
    }, tempo);
  });
}

const promises = [
  esperaTime('Promise 1', 3000),
  // esperaTime('Promise 1', 300),
  esperaTime('Promise 2', 5000),
  // esperaTime('Promise 2', 500),
  esperaTime('Promise 3', 1000),
  // esperaTime('Promise 3', 10000),
  // esperaTime(1000, 1000),
];

Promise.race(promises)
.then(function(valor) {
  console.log(valor);
})
.catch(function(erro) {
  console.log(erro);
});

############# Promise.resolve ##############
function baixaPagina() {
  // const emCache = true;
  const emCache = false;

  if(emCache) {
    return Promise.resolve('Página em cache.');
  } else {
    return esperaTime('Baixei a página.', 3000);
  }
}

baixaPagina()
  .then(dadosDaPagina => {
    console.log(dadosDaPagina);
  })
  .catch(e => console.log(e));

############# Promise.rejetc ##############
function baixaPagina() {
  const emCache = true;
  // const emCache = false;

  if(emCache) {
    return Promise.reject('Página em cache.');
  } else {
    return esperaTime('Baixei a página.', 3000);
  }
}

baixaPagina()
  .then(dadosDaPagina => {
    console.log(dadosDaPagina);
  })
  .catch(e => console.log('Exibir pq é um erro', e));
 */