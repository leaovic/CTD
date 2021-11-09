

// function podeSubir(altura, responsavel) {
//     if (altura >= 1.40 && altura <= 2.0){
//     return true;
//     }
//     else if ((altura <= 1.40 && altura >= 1.20) && responsavel == true){
//     return true;
//     }
//     else {
//         return false
//     }
// }

// console.log(podeSubir(3, true));

function podeSubir(altura, responsavel) {
    if (altura >= 1.40 && altura <= 2.0){
    console.log("Acesso autorizado");
    }
    else if ((altura <= 1.40 && altura >= 1.20) && responsavel == true){
    console.log("Acesso autorizado somente acompanhado por pessoa responsavel");
    }
    else {
        console.log("Acesso negado");
    }
}

podeSubir(1.20, true)