function somar(a,b) {
    console.log("Dentro da Function");
    return(a+b);
}

console.log(somar(10, 5));

function nomePessoa(nome, idade) {
    return nome+" tem "+idade+ " anos de idade ";
}

console.log(nomePessoa("Marcos",25));

let sub=function(x,y){
    console.log(x-y);
}

sub(10,5);

console.log( Math.random() );

function continencia() {
    console.log("Pelotao, sentido!");
}

continencia();
