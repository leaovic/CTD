

// DIGITE AQUI SEU PRATO
let menu = "pipoca";


switch (menu) {
    case "pipoca":
        console.log("Modo Pipoca");
        break;
    case "macarrao":
        console.log("Modo Macarrao");
        break;
    case "carne":
        console.log("Modo Carne");
        break;
    case "feijao":
        console.log("Modo Feijao");
    case "brigadeiro":
        console.log("Modo Brigadeiro");
    default:
        console.log("Prato Inexistente")
}

function pipoca(tempo, padrao, menu) {
    if (tempo == (2*10) && padrao == 10){
        console.log("comida queimou");
    }
   else if (tempo >=10*3) {
       console.log("Kabum!!!");
   }
    else if (tempo <=9) {
        console.log("Tempo insuficiente");
    }
    else {
        console.log("Prato pronto, bom apetite");
    }
}

pipoca(8,10);