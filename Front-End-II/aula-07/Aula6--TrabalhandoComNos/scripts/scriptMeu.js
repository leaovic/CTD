var botaoVerMais = document.createElement("button");
var botaoTexto = document.createTextNode("Ver Mais");
botaoVerMais.appendChild(botaoTexto);
document.body.appendChild(botaoVerMais);

// selecionamos um elemento html 
let elemento = document.querySelector('img'); 
//consultamos se possui um atributp src
elemento.hasAttribute("src");