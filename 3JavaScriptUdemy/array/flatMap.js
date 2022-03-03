const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    },
    {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 5.1
    },
    {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

console.log([].concat([8.1, 9.3], [5.1, 7.3]))


Array.prototype.flatMap2 = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback)) //flatmap ja existe como padrao da linguagem mas aqui estaria a implementacao
}


const notas2 = escola.flatMap2(getNotasDaTurma)
const notas3 = escola.flatMap(getNotasDaTurma)
console.log(notas2)
console.log(notas3)
