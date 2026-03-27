class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if(this.ligado) {
      console.log(`${this.nome} já ligado!`);
      return;
    }

    this.ligado = true;
  }

  desligar() {
    if(!this.ligado) {
      console.log(`${this.nome} já desligado!`);
      return;
    }

    this.ligado = false;
  }
}

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome);

    this.cor = cor;
    this.modelo = modelo;
  }
}
/************************* Herança 3 ***********************/

class Tablet extends DispositivoEletronico {
  constructor(nome, wifi) {
    super(nome);
    this.wifi = wifi;
  }

  ligar() {
    console.log('Alerta! Você alterou o método ligar.')
  }
  SoNoTablet(){
    console.log('Msg apenas na classe filho(tablet)!');
  }
}

const aparelho1 = new Smartphone('Motorola', 'azul', 'Edge G60 Pró');
console.log(aparelho1);

const tablet1 = new Tablet('iPad', true);
tablet1.ligar();
tablet1.ligar();
tablet1.SoNoTablet();


/*
************************** Herança 2 **************************************

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome);

    this.cor = cor;
    this.modelo = modelo;
  }
}

const aparelho1 = new Smartphone('Motorola', 'azul', 'Edge G60 Pró');
// aparelho1.ligar();
console.log(aparelho1);

************************** Herança 1 **************************************

class Smartphone extends DispositivoEletronico {}

const aparelho1 = new Smartphone('Edge G60 Pró');
aparelho1.ligar();
console.log(aparelho1);

******************************************************

const disp1 = new DispositivoEletronico('Smartphone');
disp1.ligar();
disp1.ligar();
disp1.desligar();
disp1.desligar();
console.log(disp1);
*/
