const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Celular', preco: 4199, fragil: false },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plastico', preco: 7.99, fragil: false }
]

console.log(produtos.filter(function (p) {
    return false //se passar verdadeiro para o elemento o array resultante tera o elemento se nao ele nao sera incluido
}))

const ehCaro = produto => produto.preco >= 500
const ehFragil = produto => produto.fragil //nao precisa comparar pois ja retorna um boolean

console.log(produtos.filter(ehCaro).filter(ehFragil))
