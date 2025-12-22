// Strings são indexadas, ou seja, tem indíces em cada caractere


//               01234567 <- indices
let String1 = "Um texto";
console.log(String1.concat(' ', 'maior')); // unido dois textos
console.log(String1+ ' maior!'); // unido dois textos
console.log(`${String1} maior.`); // unido dois textos


let umaString = "Um texto";
console.log(umaString[4]); // resp -> e
console.log(umaString[8]); // resp -> undefined
console.log(umaString[7]); // resp -> o

console.log(umaString.charAt(6)); // resp -> t
console.log(umaString.charAt(8)); // resp -> valor vazio


// let umaString = 'Apenas um "texto"';
// let outraString = "Apenas um \"texto\"";
// // barra invertida serve como caractere de escape
// // no caso de ter que usar duas aspas duplas
// console.log(umaString);
// console.log(outraString);