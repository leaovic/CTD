// let carro = {
//     modelo : "Ford",
//     cor : "branco",
//     andar : function(){
//         return "Carro "+this.modelo+" andando na cor "+this.cor;
//     }
// }

// let carro2 = {
//     modelo : "Ford",
//     cor : "preto",
//     andar : function(){
//         return "Carro "+this.modelo+" andando na cor "+this.cor;
//     }
// }

// console.log(carro.andar() );

function Carro(modelo, cor) 
    this.modelo = modelo;
    this.cor = cor;
    this.pular = function(){
        return "meu "+this.modelo+" esta pulando";
    }
}

// let carro1 = new Carro("Ford", "Azul");
// let carro2 = new Carro("Tesla", "Vermelho");
// console.log(carro1.cor);
// console.log(carro2.cor);
// console.log(carro2.pular());
