/*
***** Operadores Lógicos *****

>   maior que
const comp = 10 > 5;
console.log(comp);
console.log(10 > 5);

>=  maior que ou igual a
const comp = 10 >= 5;
const comp = 10 >= 10;
const comp = 10 >= 11;
console.log(comp);

<   menor que
const comp = 10 < 11;
const comp = 10 < 10;
const comp = 10 < 9;
console.log(comp);

<=  menor que ou igual a
const comp = 10 <= 11;
const comp = 10 <= 10;
const comp = 10 <= 9;
console.log(comp);

==  igualdade (valor) ********** <- não se utiliza
const num1 = 10; NUMBER
const num2 = '10'; STRING
const comp = num1 == num2; a ling. fez a conversão por conta própria
console.log(comp); Resultado é True, por isso não devemos usar

=== igualdade estrita (valor e tipo) 
const num1 = 10; NUMBER
const num2 = 10; NUMBER
const num2 = '10'; STRING
const comp = num1 === num2; agora a ling. leu o valor primitivo
console.log(comp);

!=  diferente (valor)  ********** <- não se utiliza
const num1 = 10; mesma situação do (==)
const num2 = '10';
const num2 = 10;
const num2 = 12;
const comp = num1 != num2;
console.log(comp);

!== diferente estrito (valor e tipo)
const num1 = 10; mesma situação (===)
const num2 = '10';
const num2 = 10;
const num2 = 12;
const comp = num1 !== num2;
console.log(comp);

*/
const num1 = 10;
const num2 = 12;
const comp = num1 !== num2;
console.log(comp);
