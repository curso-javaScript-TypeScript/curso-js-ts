// 705.484.450-52 070.987.720-03
class ValidaCPF{
  constructor(cpfEnviado) {
    Object.defineProperty(this, 'cpfSoNumeros', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, '')
    });
  }

  éSequência() {
    return this.cpfSoNumeros.charAt(0).repeat(11) === this.cpfSoNumeros;
  }

  criaNovoCpf() {
    const cpfSemDigitos =this.cpfSoNumeros.slice(0, -2);
    const digito1 = ValidaCPF.criaDigito(cpfSemDigitos);
    const digito2 = ValidaCPF.criaDigito(cpfSemDigitos + digito1);
    this.novoCPF = cpfSemDigitos + digito1 + digito2;
  }

  static criaDigito(cpfSemDigitos) {
    let total = 0;
    let reverso = cpfSemDigitos.length + 1;
    
    for(let stringNumerica of cpfSemDigitos) {
      total += reverso * Number(stringNumerica);
      reverso--;
    }

    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : '0';
  }

  valida() {
  if(!this.cpfSoNumeros) return false;
  if(typeof this.cpfSoNumeros !== 'string') return false;
  if(this.cpfSoNumeros.length !== 11) return false;
  if(this.éSequência()) return false;
  this.criaNovoCpf();

  return this.novoCPF === this.cpfSoNumeros;
  }
}

let validacpf = new ValidaCPF('070.987.720-03');
// validacpf = new ValidaCPF('000.000.000-00');

if (validacpf.valida()) {
  console.log('CPF Válido!');
} else {
console.log('CPF Inválido!');
}
