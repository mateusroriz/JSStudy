const alunos = [
    { nome: 'Joao', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.1, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.3, bolsista: true }
]

//Desafio 1: todos os alunos sao bolsistas?
const todosBolsitas = (resultado, bolsista) => resultado && bolsista //ambos tem q ser verdadeiros pra retornar true
console.log(alunos.map(a=> a.bolsista).reduce(todosBolsitas))

const algumBolsista = (resultado, bolsista) => resultado || bolsista //se um for verdadeiro vai retornar true
console.log(alunos.map(a=> a.bolsista).reduce(algumBolsista))
console.log(alunos.map(a=> a.bolsista))