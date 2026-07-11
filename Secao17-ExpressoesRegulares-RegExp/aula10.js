const { ips, cpfs } = require("./base");

// Encontra todas as palavras
const palavrasRegEx = /([\wÀ-ú]+)/g;

// Não números (Fica apenas os números)
const naoNumerosRegEx = /\D/g;

// Valida IP
const ipRegExp =
  /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;
console.log(ips.match(ipRegExp), "\n");

// Valida CPF
const cpfRegExp = /(?:\d{3}\.){2}\d{3}-\d{2}/g;
console.log(cpfs.match(cpfRegExp));

// Valida telefones
const validaTelefone = /^(\(\d{2}\)\s*)?(9\s*)?(\d{4})-(\d{4})$/g;

// Validar senhas fortes
const validaSenhasFortes =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\]\)]).{8,}$/g;

// Validar e-mails mais usado no Brasil
const validaemais = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;

/*

const validaEmail =
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


Um texto que tem palavras acentuadas e quebras de linhas.
Atenção, este é um texto para capturar todas as palavras.
Mesmo que não forem match de \w
Vamos ver se seremos bem sucedidos.

(61) 9 9999-5555
9 9999-5555
99999-4444
9999-9999
999995555
999995555
61999994444

senhas válidas
]DC1Xt8r
N-#7h8{V
4SNsn0)V
4a4a@Av1

Invalidas
12345678
abc12345
1a2b3cab
1A2a3b4C

*/
