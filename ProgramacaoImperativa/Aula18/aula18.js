

// Loop de Pares
// Você deve criar uma função chamada loopDePares que receba um número como parâmetro e faça loops de 0 a 100 mostrando cada número do loop no console.
// Caso o número da iteração somado com o número passado pelo parâmetro seja par, aparecerá no console: "O número x é par"

// function FizzBuzz(a, b) {
//     for (let i = 0; i <= 100; i++) {
//         if(i%a==0){
//             console.log('Fizz');
//         }else if(i % b == 0) {
//             console.log('Buzz');
//         }else if(i % a == 0 && i % b == 0) {
//             console.log('FizzBuzz');
//         }else {
//             console.log(i);
//         }
            
//     }
// }

// FizzBuzz(2, 6);


function loopDePares() {
    for (var i = 0; i <= 100; i++) {
        if (i%2==0)  {
                        console.log('Este numero e par ' +i);
        }
        
        else  {
            console.log('O numero e impar ');
        }
    }
}

loopDePares();