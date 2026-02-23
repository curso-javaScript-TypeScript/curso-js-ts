try {
// É executada quando não há erros
} catch (e) {
// É executada quando há erros
} finally {
// Este bloco será executado sempre, podendo ser omitido
}

function horaAtual(data) {
  if ( data && !(data instanceof Date)) {
    throw new TypeError('Esperando instância de Date.');
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString('pt-BR');
}


try {
  const data = new Date('23-02-2026 20:41:12');
  const hora = horaAtual();
  console.log(hora);
} catch(e) {
  // Tratar erro aqui
}
finally {
  console.log('\nNovamente o finally')
}


/*
try {
  // console.log(erroDeProposito);
  console.log('Abrir um arquivo');
  console.log('Manipulei o arquivo e gerou erro');
  console.log('Fechei o arquivo');

  try {
    console.log(outroErroProposital);
  } catch(e) {
    console.log('\nErro detectado');
  } finally {
    console.log('Também sou Finally!');
  }


} catch (e) {
  console.log('Tratando o erro');
} finally {
  console.log('\nFinally: Eu sempre sou executado');
}
*/