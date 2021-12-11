const arrayEstudantesImported = require('./estudantes');
const AlunoImported = require('./construtor');

console.log("")

const curso = {
    nomeDoCurso: 'CTD',
    notaDeAprovacao: 7,
    faltasMaximas: 5,
    listaDeEstudantes: arrayEstudantesImported,
    adicionarAlunos: function (listaDeEstudantes, novoAluno) {
        listaDeEstudantes = listaDeEstudantes.push(novoAluno);
        return listaDeEstudantes;
    },
    aprovado: function (aluno) {
        for (var i = 0; i < this.listaDeEstudantes.length; i++) {
            if (this.listaDeEstudantes[i].nome === aluno) {
                if (this.listaDeEstudantes[i].calcularMedia() >= this.notaDeAprovacao && this.listaDeEstudantes[i].quantidadeDeFaltas < this.faltasMaximas) {
                    return true;
                } else if ((this.listaDeEstudantes[i].calcularMedia() * 1.1) >= this.notaDeAprovacao && this.listaDeEstudantes[i].quantidadeDeFaltas === this.faltasMaximas) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    },
    arrayDeResultados: function () {
        const arrayAprovacao = [];
        for (var i = 0; i < this.listaDeEstudantes.length; i++) {

            if (this.listaDeEstudantes[i].calcularMedia() >= this.notaDeAprovacao && this.listaDeEstudantes[i].quantidadeDeFaltas < this.faltasMaximas) {
                arrayAprovacao.push(true);
            } else if ((this.listaDeEstudantes[i].calcularMedia() * 1.1) >= this.notaDeAprovacao && this.listaDeEstudantes[i].quantidadeDeFaltas === this.faltasMaximas) {
                arrayAprovacao.push(true);
            } else {
                arrayAprovacao.push(false);
            }
        }
        return arrayAprovacao;
    },
};




 console.log(curso.aprovado('Victor Leão'));
 curso.adicionarAlunos(arrayEstudantesImported, aluno6 = new AlunoImported("Gusttavo Lima", 20, [9, 9, 9, 9]));
 console.log(curso.arrayDeResultados());
 console.log(curso.listaDeEstudantes);