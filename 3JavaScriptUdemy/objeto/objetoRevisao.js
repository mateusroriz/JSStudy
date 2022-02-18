//colecao dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220


console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 8900,
    proprietario: {
        nome: 'Anon',
        idade: 20,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Pedro',
        idade: 21
    }, {
        nome: 'Paulo',
        idade: 23
    }],
    calcularValorSeguro: function () {
        // ...
    }
}

carro.proprietario.endereco.numero = 1002
carro['proprietario']['endereco']['logradouro'] = 'Av Qualquer'
console.log(carro)

// delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores) //nao da erro pq ele so retorna que nao existe condutores dentro de carro
console.log(carro.condutores.length) //da erro pq tenta acessar um atributo de algo indefinido 