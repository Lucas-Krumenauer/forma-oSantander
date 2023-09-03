//tipos primitivos

//boolean
var vOuF = false;
console.log(typeof(vOuF));

//number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//string
var nome = 'lucas';
console.log(typeof(nome));

//function
var funcao = function(){}
console.log(typeof(funcao));

//como declarar
var variavel = 'lucas';
variavel = 'krumenauer';
console.log(variavel);

let variavel2 = 'lucas';
variavel2 = 'krumenauer';
console.log(variavel2);

const constante = 'lucas';
console.log(constante);

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoGlobalInterno = 'local';
    console.log(escopoGlobalInterno);
}

escopoLocal();

/*<!------------------------------------>*/
//Operadores Lógicos

//atribuição
var atribuição = 'diana';

//comparação
var comparacao = '0' == 0;
console.log(comparacao);

//comparação identica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

//adição
var adicao = 1 + 1;
console.log(adicao);

//subtração
var subtracao = 2 - 1;
console.log(subtracao);

//multiplicação
var multiplicacao = 2 * 3;
console.log(multiplicacao);

//divisão
var divisao = 6 / 2;
console.log(divisao);

//divisão inteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

//potenciação
var potenciacao = 2 ** 10;
console.log(potenciacao);

/*<!------------------------------------>*/
//Operadores Aritimeticos

//maior que
var maiorQue = 5 > 2;
console.log(maiorQue);

//menor que
var menorQue = 5 < 2;
console.log(menorQue);

//maior ou igual a
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

//menor ou igual a 
var maiorQue = 5 <= 2;
console.log(maiorQue);

/*<!------------------------------------>*/
//Operadores Lógicos

var e = true && false;
console.log(e);

var ou = true || false;
console.log(ou);

var nao = !true;
console.log(nao);