function teste1(x,y) {
    return y-x;
}

console.log(teste1(10,40));

function teste2(x,y) {
    return x*2;
    console.log(x);
    return x/2;
}

console.log(teste2(10));

function polcm(polegada) {
    return polegada * 2.54;
}

console.log(polcm(10));

function converter(string) {
    return `http://www.${string}.com.br`;
}

console.log(converter("olaenfermeira"));

function addString(string) {
    return `!${string}`;
}

console.log(addString("Testando"));

function cachorro(idade) {
    return idade * 7;
}

console.log(cachorro(4));

function horatrab(mensal) {
    return mensal / 160;
}

console.log(horatrab(3200));

function imc(altura, peso) {
    return (peso / altura ** 2).toFixed(2);
}

console.log(imc(1.8, 90));

function minus(nome) {
    return nome = "ola enfermeira".toUpperCase;
}

console.log(minus(ola));//ESTUDAR MAIS