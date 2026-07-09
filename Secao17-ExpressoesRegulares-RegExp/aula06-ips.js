const { ips } = require("./base");

const ipRegExp =
  /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

console.log(ips.match(ipRegExp));

/* exercicios e testes IP's

^ -> Começa com
$ -> Termina com

console.log(ips);
console.log(ips.match(ipRegExp));


250 - 255 25[0-5]
200 - 249 2[0-4][0-9]
100 - 199 1\d{2}
10  - 99  [1-9]\d
0   - 9   \d

const ipRegExp =
  /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

for (let i = 0; i <= 255; i++) {
  const ip = `${i}.${i}.${i}.${i}`;
  console.log(ip, ip.match(ipRegExp));
}
*/
