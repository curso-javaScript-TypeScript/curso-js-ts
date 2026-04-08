

document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  try {
    const href = el.getAttribute('href');
    const response = await fetch(href);
  
    if(response.status !== 200) throw new Error('ERRO Indefinido');
  
    const html = await response.text();
    carregaResultado(html);
    } catch(e) {
    console.log(e);
    }
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}




/* exemplo um (1)

const request = obj => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();
  
    xhr.addEventListener('load', () => {
      if(xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });
};

document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  const href = el.getAttribute('href');

  const objConfig = {
    method: 'GET',
    url: href
  };

  try {
  const response = await request(objConfig);
  carregaResultado(response);
  } catch(e) {
    console.log(e);
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}

fetch('pagina1.html')
//fetch('pagina4.html')
  .then(resposta => {
    if(resposta.status !== 200) throw new Error('ERRO 404 HEITA');
    return resposta.text();
  })
  .then(html => console.log(html))
  .catch(e => console.error(e));
*/