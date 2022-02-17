function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4576,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco()) //chamando a funcao diretamente
console.log(produto.getPreco()) //chamar a funcao a partir de um objeto


const carro = {
    preco: 49990,
    desc: 0.20
}

//usando o metodo call() que invoca uma funcao com um dado valor this e argumentos passados individualmente
console.log(getPreco.call(carro)) 
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$')) //no call o primeiro parametro sempre eh o contexto e dps os parametros desse contexto
console.log(getPreco.apply(global, [0.17, '$']))  //msm coisa do call mas usa um array para passar os parametros
