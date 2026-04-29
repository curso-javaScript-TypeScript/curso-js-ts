import Pessoa, { nome, sobrenome } from './modulo1';

const pessoa1 = new Pessoa(nome, sobrenome);
console.log(pessoa1);





/*  
*********** EXEMPLOS E TESTES DA AULA **********************
import multiplica, {nome, sobrenome, idade, soma } from './modulo1';
console.log(multiplica(26, 2));
console.log(nome, sobrenome, idade, soma(6, 4));

################################################################

import soma from './modulo1';
console.log(soma(26, 2));

#################################################################

import mudandoSoma from './modulo1';
console.log(mudandoSoma(6, 4));

##################################################################

import * as MeuModulo from'./modulo1';
console.log(MeuModulo);

###################################################################

import { nome2, sobrenome, idade, soma, Pessoa } from'./modulo1';

const pessoa1 = new Pessoa('Magno', 'V Gomes');
console.log(pessoa1);

import { nome2, sobrenome, idade, soma, Pessoa as Testando } from'./modulo1';

const pessoa1 = new Testando('Magno', 'V Gomes');
console.log(pessoa1);

########################################################################

import { nome, sobrenome, idade, soma } from'./modulo1';
import { nome as nome2, sobrenome, idade, soma } from'./modulo1';
import { nome as nome2, sobrenome as teste, idade, soma } from'./modulo1';

console.log(nome, sobrenome, idade);
console.log(nome, nome2, sobrenome, idade);
console.log(nome, nome2, teste, idade);
console.log(soma(6, 4));
*/