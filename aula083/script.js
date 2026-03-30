function teste() {
  console.log('Executando esta função dentro da classe');
}

class ControleRemoto {
  constructor(tv, imagem) {
    this.tv = tv;
    this.imagem = imagem;
    this.volume = 0;
    teste();
  }
// Método de Instância
  aumentarVolume() {
    this.volume += 4;
  }
  diminuirVolume() {
    this.volume -= 2;
  }

// Método Estático 
  static somaValores(x, y) { 
     console.log(this);
    //  return x + y;
  }
}

const controle1 = new ControleRemoto('LG', '4K');
ControleRemoto.somaValores();
// const soma = new ControleRemoto('LG', '4K');


/*
class ControleRemoto {
  constructor(tv, imagem) {
    this.tv = tv;
    this.imagem = imagem;
    this.volume = 0;
  }
// Método de Instância
  aumentarVolume() {
    this.volume += 4;
  }
  diminuirVolume() {
    this.volume -= 2;
  }

// Método Estático 
  static controleUniversal() { 
     console.log('ok, trocando modelo de controle');
  }
}

const controle1 = new ControleRemoto('LG', '4K');
controle1.aumentarVolume();
controle1.diminuirVolume();
controle1.aumentarVolume();
console.log(controle1);

ControleRemoto.controleUniversal();
*/
