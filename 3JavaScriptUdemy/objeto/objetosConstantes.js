// pessoa -> 123 -> {...}
const pessoa = { nome: 'Anon' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome: "Joao"}

//objeto nao pode mais ser modificado
Object.freeze(pessoa)

pessoa.nome = 'Carlos'
pessoa.end = 'Rua abc'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)


const pessoaConstante = Object.freeze({nome: "Paulo"})
pessoaConstante.nome = "Lucas"
console.log(pessoaConstante)