// Object.preventExtensions = nao pode adicionar novos atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})

console.log(produto);

console.log('Extensivel: ', Object.isExtensible(produto));

produto.nome = 'borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag;

console.log(produto)

// Object.seal = nao adiciona nem exclui
const pessoa = { nome: 'Anon', idade: 20 }
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 23
console.log(pessoa)

// Object.freeze = selado + valores constantes

