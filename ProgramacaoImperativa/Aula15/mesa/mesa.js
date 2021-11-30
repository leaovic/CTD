function ContaBancaria(numConta, tipoConta, saldo, titular){
    this.numConta = numConta;
    this.tipoConta = tipoConta;
    this.saldo = saldo;
    this.titular = titular;
}

let contas = [
    new ContaBancaria(5486273622, 'Conta Corrente', 27771, 'Abigael Natte'),
    new ContaBancaria(1183971869, 'Conta Poupança', 8675, 'Ramon Connell'),
    new ContaBancaria(9582019689, 'Conta Poupança', 27363, 'Jarret Lafuente'),
    new ContaBancaria(1761924656, 'Conta Poupança', 32415, 'Ansel Ardley'),
    new ContaBancaria(7401971607, 'Conta Poupança', 18789, 'Jacki Shurmer'),
    new ContaBancaria(630841470, 'Conta Corrente', 28776, 'Jobi Mawtus'),
    new ContaBancaria(4223508636, 'Conta Corrente', 2177, 'Thomasin Latour'),
    new ContaBancaria(185979521, 'Conta Poupança', 25994, 'Lonnie Verheijden'),
    new ContaBancaria(3151956165, 'Conta Corrente',	7601, 'Alonso Wannan'),
    new ContaBancaria(2138105881, 'Conta Poupança', 33196, 'Bendite Huggett')
    ]


JsonArray = JSON.stringify(contas)
 console.log(contas)

module.exports = JsonArray


// let conta() {
//     nome : 
//     profissao :
//     idade :
//     linguagens :
//     disponibilidadeParaViajar :
//     ramoProfissional : {
//         anosDeExperiencia :
//         nivel :
//     }
// }

// function ContaBancaria(numConta, tipoConta, saldo, titular){
//     this.numConta = numConta;
//     this.tipoConta = tipoConta;
//     this.saldo = saldo;
//     this.titular = titular;
// }

// let contas = [
//     '{"numero" : 5486273622, "tipoConta": "Conta Corrente", "saldo": 27771, "titular" : "Abigael Natte"}',
//     '{"numero" : 1183971869, "tipoConta": "Conta Poupança", "saldo": 8675, "titular" : "Ramon Connell"}',
//     '{"numero" : 9582019689, "tipoConta": "Conta Poupança", "saldo": 27363, "titular" : "Jarret Lafuente"}',
//     '{"numero" : 1761924656, "tipoConta": "Conta Poupança", "saldo": 32415, "titular" : "Ansel Ardley"}',
//     '{"numero" : 7401971607, "tipoConta": "Conta Poupança", "saldo": 18789, "titular" : "Jacki Shurmer"}',
//     '{"numero" : 630841470, "tipoConta": "Conta Poupança", "saldo": 28776, "titular" : "Jobi Mawtus"}',
//     '{"numero" : 4223508636, "tipoConta": "Conta Poupança", "saldo": 2177, "titular" : "Thomasin Latour"}',
//     '{"numero" : 185979521, "tipoConta": "Conta Poupança", "saldo": 25994, "titular" : "Lonnie Verheijden"}',
//     '{"numero" : 3151956165, "tipoConta": "Conta Corrente", "saldo": 7601, "titular" : "Alonso Wannan"}',
//     '{"numero" : 2138105881, "tipoConta": "Conta Poupança", "saldo": 33196, "titular" : "Jarret Lafuente"}',]

//     console.log(contas);

//     module.exports = contas;
//     consultarCliente : function(titularAcc){
//       return this.clientes.find(obj => obj.titular === titularAcc)
//     },

//     deposito : function(titularAcc, qntDeposito){
//        return `Depósito realizado, seu novo saldo é: ${this.clientes.find(obj => obj.titular === titularAcc).saldo+=qntDeposito}`;
//     },
//     saque: function(titularAcc, qntSaque){
        
//         let newSaldo = this.clientes.find(obj => obj.titular === titularAcc).saldo-=qntSaque;
//         if(newSaldo < 0){
//             console.log("Fundos Insuficientes");
//         }else{
//             return console.log('Extração feita com sucesso, seu novo saldo é: ' + newSaldo);
//         }
        
//     }
// }


// console.log(banco.consultarCliente("Jacki Shurmer"));
// console.log(banco.deposito("Jacki Shurmer", 80000));
// console.log(banco.saque("Jacki Shurmer", 8000));





function Account(contaNum, contaTipo, saldo, titular){
    this.contaNum = contaNum;
    this.contaTipo = contaTipo;
    this.saldo = saldo;
    this.titular = titular;
}

module.exports = Account;


const data = [
    // numero	tipo	saldo	titular
    { "numero": 5486273622, "tipo": "Conta Corrente", "saldo": 27771, "titular": "Abigael Natte" },
    { "numero": 1183971869, "tipo": "Conta Poupança", "saldo": 8675, "titular": "Ramon Connell" },
    { "numero": 9582019689, "tipo": "Conta Poupança", "saldo": 27363, "titular": "Jarret Lafuente" },
    { "numero": 1761924656, "tipo": "Conta Poupança", "saldo": 32415, "titular": "Ansel Ardley" },
    { "numero": 7401971607, "tipo": "Conta Poupança", "saldo": 18789, "titular": "Jacki Shurmer" },
    { "numero": 630841470, "tipo": "Conta Corrente", "saldo": 28776, "titular": "Jobi Mawtus" },
    { "numero": 4223508636, "tipo": "Conta Corrente", "saldo": 2177, "titular": "Thomasin Latour" },
    { "numero": 185979521, "tipo": "Conta Poupança", "saldo": 25994, "titular": "Lonnie Verheijden" },
    { "numero": 3151956165, "tipo": "Conta Corrente", "saldo": 7601, "titular": "Alonso Wannan" },
    { "numero": 2138105881, "tipo": "Conta Poupança", "saldo": 33196, "titular": "Bendite Huggett" },
]

module.exports = data;



/*
SEGUINDO A MESA DE TRABALHO DA AULA 13. DESENVOLVA ESSE ALGORITMO 
1 - CRIE UMA FUNÇÃO CONSTRUTORA PARA O OBJETO CONTA BANCARIA COM AS SEGUINTES PROPRIEDADES:
● Número da conta (somente números)
● Tipo de conta (conta corrente ou poupança em $)
● Saldo em $ (valor apenas)
● Titular da conta (nome completo)
2 - MOLDE AS INFORMAÇÕES DO ARQUIVO https://drive.google.com/file/d/16L2NejZU49mCLbo6RTmSKtuElOTOYUXv/view
PARA O FORMATO JSON, E EXPORTE ESSE JSON COMO MODULO
3 - DESENVOLVA UM ALGORITOMO QUE IRA RECEBER O MODULO ARRAY DE JSON E CRIE DINAMICAMENTE OS 
OBJETOS CONTA BANCARIA EM UM SEGUNDO ARRAY LISTA USUARIOS ARMAZENE ESSE OBJETOS 
4 - CRIE DE UM OBJETO LITERAL CHAMADO BANCO QUE TERÁ UMA PROPRIEDADE CHAMADA CLIENTES, ELE SERÁ COMPOSTO 
PELA LISTA DE OBJETOS GERADOS NO PONTO ANTERIOR.
5 - O OBJETO DO BANCO CRIARÁ UM MÉTODO CHAMADO CONSULTARCLIENTE QUE RECEBERÁ UM
NOME (TITULAR) POR PARÂMETRO E DEVE PESQUISAR NA LISTA DE CONTAS E RETORNAR AO
OBJETO DO CLIENTE QUE CORRESPONDE A ESSE NOME INSERIDO.
*/

const data = require("./data");
const Account = require("./Account");

const accounts = []
for (let i=0; i<data.length; i++){
    const newAccount = new Account(data[i].numero, data[i].tipo, data[i].saldo, data[i].titular);
    accounts.push(newAccount);
}

const banco = {
    clients: accounts,
    buscaCliente: function(titular){
        for (let i=0; i< this.clients.length; i++){
            if (this.clients[i].titular === titular){
                return this.clients[i];
            }
        }
        return "Cliente não encontrado"
    }

}
console.log(banco.buscaCliente("Jacki Shurmer"));