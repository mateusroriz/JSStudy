const carrinho = [
    '{"nome": "Borracha", "preco": 3.34}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapos", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preço
const paraObjeto = json => JSON.parse(json)

const apenasPreco = produto => produto.preco

const final = carrinho.map(paraObjeto).map(apenasPreco)

console.log(final)