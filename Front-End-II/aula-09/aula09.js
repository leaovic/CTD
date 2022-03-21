function executaCalculo (callback) {
    let valor1 = 2;
    let valor2 = 3;

    let soma = valor1+valor2;

    callback(soma);
}

function exibeResultado (resultado) {
    console.log(`O resultado foi ${resultado}`);
}

executaCalculo(exibeResultado);