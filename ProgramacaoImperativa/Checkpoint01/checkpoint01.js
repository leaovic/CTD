
let padrao=null;

function microondas(prato,tempo) {

    switch (prato) {
        case  "Pipoca":
            padrao = 10;
            break;
        case  "Macarrão":
            padrao = 8;
            break;
        case  "Carne":
            padrao = 15;
            break;
        case  "Feijão":
            padrao = 12;
            break;
        case  "Brigadeiro":
            padrao = 8;
            break;
        default:
            console.log("Prato inexistente")
            padrao = null;
            tempo = null;
            break;
    }

    if (tempo>(2*padrao)&&tempo<(3*padrao)){
        console.log("Comida queimou")
    }
        else if (tempo==null&&padrao==null) {
            console.log(" ")
        }
        else if (tempo<padrao){
            console.log("Tempo Insuficiente")
        }

        else if (tempo>=(3*padrao)) {
            console.log("KABUM!")
        }

    else {
        console.log("Prato pronto, bom apetite!")
    }
}

microondas("Carne",30)