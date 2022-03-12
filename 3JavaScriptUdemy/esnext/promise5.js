function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            con.log('temp') //erro forcado
            if (Math.random() < chanceErro) {
                reject('Ocorreu um erro')
            } else {
                resolve(valor)
            }
        } catch (e) {
            reject(e)
        }

    })
}

funcionarOuNao('Teste Passou...', 0.5)
    .then(console.log)
    .then(
        v => consol.log(v),
        err => console.log(`Erro Especifico: ${err}`) //segundo parametro em then e o tratamento te erros para aquele bloco
    )
    .then(() => console.log('Quase Fim!'))
    .catch(err => console.log(`Erro Geral: ${err}`))
    .then(() => console.log('Fim!')) //sera sempre executado depois do catch