import CriaCPF from './modules/CriaCPF';

import './assets/css/styles.css';

(function() {
  const cria = new CriaCPF();
  const cpfGerado = document.querySelector('.cpf-gerado');
  cpfGerado.innerHTML = cria.criaNovoCpf();
})();