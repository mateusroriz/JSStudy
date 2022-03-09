function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) //resolve aceita apenas um parametro
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'frase passada na promise!')
    .then(frase => frase.concat('?!?')) //promises tem a funcao then que sao chamadas quando a promise eh resolvida
    .then(outraFrase => console.log(outraFrase)) //then podem ser encadeados 
    .catch(e => console.log(e)) //para pegar erros
