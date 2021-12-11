const AlunoImported = require('./construtor');

let aluno1 = new AlunoImported("André Pedreschi", 1,[8, 7, 6, 5]);
let aluno2 = new AlunoImported("Victor Leão", 1,[4, 8, 9, 8]);
let aluno3 = new AlunoImported("Breno Sabino", 1,[2, 9, 8, 7]);
let aluno4 = new AlunoImported("Jaqueline Silva", 1,[9, 9, 5, 6]);
let aluno5 = new AlunoImported("Vinicius de Andrade", 1,[6, 6, 9, 8]);


const arrayEstudantes = [aluno1, aluno2, aluno3, aluno4, aluno5];

console.log(arrayEstudantes);
aluno5.faltas();
console.log(arrayEstudantes);
aluno5.faltas();
console.log(arrayEstudantes);
aluno5.faltas();
console.log(arrayEstudantes);


module.exports = arrayEstudantes;


