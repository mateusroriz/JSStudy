function gerarNumerosEntre(min, max, tempo) {
    if (min > max) [max, min] = [min, max]

    return new Promise(resolve => {
        setTimeout(function () {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 2000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 1500)
    ])
}

console.time('promise') //label para temporizador

gerarVariosNumeros()
    .then(console.log) //so trara o resultado quando todas as promises forem cumpridas
    .then(() =>{
        console.timeEnd('promise')
    })

