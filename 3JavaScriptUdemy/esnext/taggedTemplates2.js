function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}` // se n for um numero retorne o proprio valor se nao retorne uma string editada
        resultado.push(partes[indice], valor)
    })
    return resultado.join('') //pegar todos os elementos do array resultado e gerar a string no final
}

const preco = 29.99
const precoParcela = 11
console.log(`1x de ${preco} ou de 3x de ${precoParcela}`)
console.log(real `1x de ${preco} ou de 3x de ${precoParcela}`)