const somar = require('./somar');
const dividir = require('./dividir');
const multiplicar = require('./multiplicar');
const subtrair = require('./subtrair');

let calculadora = (valor1, valor2, operacao) => 
console.log(operacao(valor1, valor2, operacao));

calculadora(3, 2, subtrair);