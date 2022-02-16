function criarProduto(nome, preco) {
    return {
        nome, //se o parametro tiver o mesmo nome do atributo nao precisa colocar nome: 
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 1225));
console.log(criarProduto('Celular', 1000));