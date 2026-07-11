const { html2 } = require("./base");

console.log(html2);
console.log(html2.match(/<(\w+)([\s\S]*?)>([\s\S]*?)<\/\1>/g));

/* exercicios e testes RegExp

$1 $2 $3 <- Retrovisores \1

console.log(
  html2.replace(/(<(\w+)(?:[\s\S]*?)>)([\s\S]*?)(<\/\2>)/g,"$1 HAHA $3 HAHA $4"));
  
    p Deus é fiel
    <p>Deus é fiel</p>
    
    console.log(html2.match(/<(\w+>.+<\/\1>/g));
    console.log(html2.match(/<[a-z]+>.+<\/.+>/g));
    console.log(html2.match(/<(\w+)[\s\S]*?>([\s\S]*?)<\/\1>/g));
    console.log(html2.match(/<.+>.+<\/.+>/g));
    console.log(html2.match(/<.+?>.+?<\/.+?>/g));
    console.log(html2.match(/<(\w+).*>.+?<\/\1>/g));
    console.log(html2.match(/<(\w+).*?>.+?<\/\1>/g));
    console.log(html2.match(/<(\w+)[\s\S]*>.+?<\/\1>/g));

*/
