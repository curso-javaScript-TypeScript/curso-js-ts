let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

varX = varA; // criei uma variável extra.
varA = varB;
varB = varC;
varC = varX;

console.log(varA, varB, varC);