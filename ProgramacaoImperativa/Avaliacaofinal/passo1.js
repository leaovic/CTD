// const aluno = [
//     {
//         "nome": "Abigael Natte",
//         "opiniao":1,
//         "idade":29
//     },
//     {

//         "nome": "Ramon Connell",
//         "opiniao":2,
//         "idade":45
//     },
//     {

//         "nome": "Jarret Lafuente",
//         "opiniao":3,
//         "idade":21
//     },
//     {

//         "nome": "Ansel Ardley",
//         "opiniao":3,
//         "idade":15
//     },
//     {

//         "nome": "Jacki Shurmer",
//         "opiniao":1,
//         "idade":24
//     },
// ]

const aluno = {
    nome : '',
    qtdFaltas : '',
    notas : [], 
    construtora : function (nome, qtdFaltas, notas){
        this.nome = nome
        this.qtdFaltas = qtdFaltas
        this.notas = notas
    }
}

module.exports = aluno

