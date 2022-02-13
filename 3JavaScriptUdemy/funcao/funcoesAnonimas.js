const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(4, 3)
imprimirResultado(4, 3, soma)
imprimirResultado(4, 3, function (x, y) {
    return x - y
})
imprimirResultado(4, 3, (x, y) => x * y)


const pessoa = {
    falar: function () { //poderia ser so falar(){}
        console.log('opa')
    }
}

pessoa.falar()