// Superclass ou classe Pai ou classe Mãe
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
  if(valor > this.saldo) {
    console.log(`Saldo insuficiente: ${this.saldo}`);
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
  this.saldo += valor;
  this.verSaldo();
};

Conta.prototype.verSaldo = function() {
console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: R$ ${this.saldo.toFixed(2)}`);
};

function CCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}
CCorrente.prototype = Object.create(Conta.prototype);
CCorrente.prototype.constructor = CCorrente;

CCorrente.prototype.sacar = function(valor) {
  if(valor > (this.saldo + this.limite)) {
    console.log(`Saldo insuficiente: ${this.saldo}`);
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

function CPoup(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}
CPoup.prototype = Object.create(Conta.prototype);
CPoup.prototype.constructor = CPoup;

const cCor = new CCorrente(141, 2612, 0, 100);
cCor.depositar(10);
cCor.sacar(110);
cCor.sacar(1);

console.log();

const cpoup = new CPoup(143, 1994, 0);
cpoup.depositar(10);
cpoup.sacar(10);
cpoup.sacar(1);

/* TESTANDO ANTES

const contaPoup = new Conta(141, 2612, 1000);
contaPoup.depositar(500);
contaPoup.depositar(400);
contaPoup.sacar(1900);
contaPoup.sacar(0.01);
console.log(contaPoup);
*/