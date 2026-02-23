
function soma(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('x e y precisam ser números');
  }
  return x + y;
}

try {
  console.log(soma(5, 5));
  console.log(soma('5', 5));
} catch(error) {
  // console.log(error); NUNCA LANÇAR O ERRO
  console.log('Imprima algo que o usuário entenda');
}



/*
try {
  console.log(erroProposital);
} catch(err) {
  console.log('erroProposital não existe');
  console.log(err);
}
*/