
// const dados = require("./dados");

// let alturaMaior = dados.sort(function (a,b) {
//     if (a.altura > b.altura) {
//         return 1;
//       }
//       if (a.altura < b.altura) {
//         return -1;
//       }
//       return 0;
//     });
// let indexFinal = dados.length-1;

// console.log(alturaMaior[0].altura);
// console.log(alturaMaior[indexFinal].altura);







// Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas. Faça um programa que calcule e escreva:
    
// a maior e a menor altura do grupo;
// a média de altura das mulheres;
// o número de homens.


const lista = require('./lista')

function tallestPerson(array) {
    let altura = []
    for (let i = 0; i < array.length; i++) {
        
        altura.push(array[i].altura)
    }
    return `Tallest person is ${Math.max(...altura)} and shortest person is ${Math.min(...altura)}`
    } 

function AvgHeightWomen(array) {
    let alturaWomen = []
    let avgHeight = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i].sexo == "F") {
            alturaWomen.push(Number(array[i].altura))
        }
    }
let sum = alturaWomen.reduce((acc, num) => acc + num, 0)

return `Average women's height: ${avgHeight = sum / alturaWomen.length}`
}

function qtdHomens(array) {
    
    return `There are ${array.filter((i) => i.sexo == "M").length} men.`
}



console.log(tallestPerson(lista))
console.log(AvgHeightWomen(lista))
console.log(qtdHomens(lista))