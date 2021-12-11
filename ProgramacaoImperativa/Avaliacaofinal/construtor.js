function Aluno(nome, quantidadeDeFaltas, notas) {
    this.nome = nome;
    this.quantidadeDeFaltas = quantidadeDeFaltas;
    this.notas = notas;
    this.calcularMedia = (function () {
        const mediaNotas = this.notas.reduce((total, next) => total + next, 0) / this.notas.length;
        return mediaNotas;
    })
    this.faltas = (function () {
        this.quantidadeDeFaltas = this.quantidadeDeFaltas +1;
        return this.quantidadeDeFaltas;
    })
}

let aluno1 = new Aluno('Victor', 2, [4, 8, 9]);

console.log(aluno1.calcularMedia());
console.log(aluno1.faltas());
console.log(aluno1.faltas());
console.log(aluno1.faltas());
console.log(aluno1.quantidadeDeFaltas);


module.exports = Aluno;