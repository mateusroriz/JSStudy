const alunos = [
    { nome: 'Joao', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

//Imperativo //os detalhes sao mais importantes do que o que tem que ser feito //diz como deve ser feito
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].notas
}
console.log(total1 / alunos.length)

//Declarativo //o que importa e o que tem que ser feito mais do que como ser feito
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma) //reduce pode ser usado para agregar elementos em um so
console.log(total2 / alunos.length)

