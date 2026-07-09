const { cpfs } = require("./base");

console.log(cpfs);
console.log(cpfs.match(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g));
console.log(cpfs.match(/\d{3}\.\d{3}\.\d{3}\-\d{2}/g));
console.log(cpfs.match(/(\d{3}\.){2}\d{3}\-\d{2}/g));

/* exercicios e testes CPF's

console.log(cpfs.match(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/g));
console.log(cpfs.match(/\d{3}\.\d{3}\.\d{3}\-\d{2}/g));
console.log(cpfs.match(/(\d{3}\.){2}\d{3}\-\d{2}/g));
console.log(cpfs.match(/[0-9]{3}\.[0-9]{3}/g));

*/
