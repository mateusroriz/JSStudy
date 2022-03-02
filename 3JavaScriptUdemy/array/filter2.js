Array.prototype.filter2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) { //se for true adiciona se nao ignora
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Celular', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plastico', preco: 7.99, fragil: false }
]

const ehCaro = produto => produto.preco >= 2500
const ehFragil = produto => produto.fragil

console.log(produtos.filter2(ehCaro).filter2(ehFragil))
