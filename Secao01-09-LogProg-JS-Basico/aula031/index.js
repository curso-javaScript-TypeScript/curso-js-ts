var sobrenome; // Elevou o VAR assim que criei a linha 65
const verdadeira = true;

// Let tem escop de bloco { ... bloco}
// Let vai de bloco em bloco do local até chegar no global

// Var só tem escopo de função
// Var tb vai do escopo global passando por todos até declarar o último valor

/*
**** PARTE 1 DA EXPLICAÇÃO SOBRE ESCOPO DE FUNÇÃO EM LET e VAR ****

let nome1 = "Magno"; // criando variável 1
var nome2 = "Magno"; // declarando valor

// var nome2 = "V Gomes"; // redeclarando valor 1
// console.log(nome1, nome2);

if (verdadeira) {
  let nome1 = "V Gomes"; // criando variável 2
  // var nome2 = "Vargas"; // redeclarando valor 1
  // console.log(nome1, nome2);

  if (verdadeira) {
    let nome1 = "Arthur"; // criando variável 3
    var nome2 = "Gomes"; // redeclarando valor 1
    // console.log(nome1, nome2);
  }
}
console.log(nome1, nome2);

let nome1 = "Magno"; // criando variável 1
var nome2 = "Magno"; // declarando valor

var nome2 = "Neusa"; // redeclarando valor

if (verdadeira) {
  let nome1 = "Neusa"; // criando variável 2
  // console.log(nome1, nome2);

  if (verdadeira) {
    let nome1 = "Arthur"; // criando variável 3
    console.log(nome1, nome2);
  }
}

**** PARTE 2 DA EXPLICAÇÃO SOBRE ESCOPO DE FUNÇÃO EM LET e VAR ****

var sobrenome = "V Gomes";

function estudandoJS() {
  var nome = "Magno";
  console.log(sobrenome);
  console.log(nome);
  console.log("Estudando JavaScript");
}
console.log(nome); aqui dará erro pq foi declarado dentro da função

estudandoJS();
*/

/* com var o resultado é "undefined"
var sobrenome = "V Gomes";
console.log(sobrenome);

var sobrenome = "V Gomes"; declarei após o console então a declaração foi criada no topo por ser 'var'

Agora com let "o code declara erro o que é o certo"
SyntaxError: Identifier 'sobrenome' 
has already been declared
*/

console.log(sobrenome);

let sobrenome = "V Gomes";
