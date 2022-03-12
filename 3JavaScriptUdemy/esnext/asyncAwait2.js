function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) [max, min] = [min, max] // invertendo o valor das variaveis usando destructuring

    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if (numerosProibidos.includes(aleatorio)) {
            reject('Numero repetido')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarLoteria(qtdeNumeros, tentativas = 1) {
    try {
        const numeros = []
        for (let _ of Array(qtdeNumeros).fill()) { //forma de percorrer o array inteiro 
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros //retorno significa o resolve
    } catch (e) {
        if (tentativas > 100) {
            throw "nao deu certo" //jogar excecao significa a rejeicao da promise /reject
        } else {
            return gerarLoteria(qtdeNumeros, tentativas + 1)
        }
    }
}

gerarLoteria(25)
    .then(console.log)
    .catch(console.log)


