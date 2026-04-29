const nome = 'Magno';

function qualNome() {
  // const nome = 'Troca de nome';
  console.log(nome);
}

function usaQualNome() {
  const nome = 'Troca de nome';
  qualNome();
}
usaQualNome();