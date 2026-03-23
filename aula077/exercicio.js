/*
705.484.450-52 <- teste 01
070.987.720-03 <- teste 02

7x  0x 5x 4x 8x 4x 4x 5x 0x <- CPF do teste 01 - 9 primeiros digitos do CPF
10  9  8  7  6  5  4  3  2 <- múltiplicando pelos digitos acima do CPF
70 0  40 28 48 20 16 15 0 = 237 <- total da soma das multiplicações

11 - (237 % 11) = 5 (Primeiro dígito) <- aplicando a fórmula
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x <- CPF do teste 01 - 10 primeiros digitos do CPF
11 10  9  8  7  6  5  4  3  2 <- múltiplicando pelos digitos acima do CPF
77  0  45 32 56 24 20 20 0  10 = 284 <- total da soma das multiplicações

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

let cpf = '705.484.450-52';
let cpfSoNumeros = cpf.replace(/\D+/g, ''); // (/\D+/g)<- expressão retira tudo que não for número
cpfArray = Array.from(cpfSoNumeros);
console.log(cpfArray.reduce((ac, val) => ac + Number(val), 0));
*/

function ValidarCPF(cpfEnviado) {
  Object.defineProperty(this, 'cpfSoNumeros', {
    get: function() {
      return cpfEnviado.replace(/\D+/g, '');
    }
  });
}

ValidarCPF.prototype.valida = function() {
  if(typeof this.cpfSoNumeros === 'undefined') return false;
  if(this.cpfSoNumeros.length !== 11) return false;
  if(this.isSequencia()) return false;

  const cpfParcial = this.cpfSoNumeros.slice(0, -2);
  const digito1 = this.criaDigito(cpfParcial);
  const digito2 = this.criaDigito(cpfParcial + digito1);
 
  const novocpf = cpfParcial + digito1 + digito2;
  return novocpf === this.cpfSoNumeros;
};

ValidarCPF.prototype.criaDigito = function(cpfParcial) {
  const cpfArray = Array.from(cpfParcial);

  let contadorRegressivo = cpfArray.length + 1;
  const acumulo = cpfArray.reduce((ac, val) => {
    ac += (contadorRegressivo * Number(val));
    contadorRegressivo--;
    return ac;
  }, 0);

  const digito = 11 - (acumulo % 11);
  return digito > 9 ? '0' : String(digito);
};

ValidarCPF.prototype.isSequencia = function() {
  const sequencia = this.cpfSoNumeros[0].repeat(this.cpfSoNumeros.length);
  return sequencia === this.cpfSoNumeros;
};


const cpf = new ValidarCPF('705.484.450-52');
// const cpf = new ValidarCPF('705.484.450-53');

if(cpf.valida()) {
  console.log('CPF Válido');
} else {
  console.log('CPF Inválido');
}