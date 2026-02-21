const elementos = [
  {tag: 'p', texto: 'tag paragráfo (p)'},
  {tag: 'div', texto: 'tag divisão (div)'},
  {tag: 'footer', texto: 'tag rodapé (footer)'},
  {tag: 'section', texto: 'tag sessão (section'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
  let {tag, texto} = elementos[i];
  let tagCapturar = document.createElement(tag); // primeira forma de capturar o loop
  let textoCaptura = document.createTextNode(texto); // segunda forma de capturar o loop

  tagCapturar.appendChild(textoCaptura);
  tagCapturar.innerText = texto; // primeira forma de capturar para imprimir o resultado
  tagCapturar.innerHTML = texto; // segunda forma de capturar para imprimir o resultado
  div.appendChild(tagCapturar);
}

container.appendChild(div);