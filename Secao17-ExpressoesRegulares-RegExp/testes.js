const { ips } = require("./base");

const teste = /^([1-9]\d|\d)/g;

for (let i = 0; i <= 99; i++) {
  const ip = `${i}.`;

  console.log(ip, ip.match(teste));
}
