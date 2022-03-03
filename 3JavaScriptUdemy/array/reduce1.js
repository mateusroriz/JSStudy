const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.1, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.3, bolsista: true }
]

console.log( alunos.map(a => a.nota))
//pegando apenas a nota dos alunos com map
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual //vai somar todas as notas dos alunos
}, 0) //valor inicial // nao eh obrigatorio

console.log(resultado)