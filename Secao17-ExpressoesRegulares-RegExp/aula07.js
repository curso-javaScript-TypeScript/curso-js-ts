const { cpfs, cpfs2 } = require("./base");

const cpf = "254.224.877-45";
const cpfRegExp = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm;
console.log(cpfs2, "\n");
console.log(cpfs2.match(cpfRegExp));

/*
$ -> Termina com
^ -> Começa com
[^] -> Negação
m - multiline (esta flag chega linha por linha)

const cpfRegExp = /^(\d{3}\.){2}\d{3}\-\d{2}$/gm;
console.log(cpf.match(cpfRegExp));
console.log(cpfs.match(cpfRegExp));

*/
