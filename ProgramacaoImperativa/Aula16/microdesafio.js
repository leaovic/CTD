

function acaoCarro(callback) {
    return  callback();
}


function andar() {
    console.log('O carro esta andando');
}

function parar() {
    console.log('O carro parou');
}

acaoCarro(andar)
acaoCarro(parar)

// console.log(andar(), parar())