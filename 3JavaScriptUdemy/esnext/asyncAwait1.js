function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(), tempo)
    })
}


// esperarPor(2000)
//     .then(console.log('Executando Promise 1 ...'))
//     .then(esperarPor)
//     .then(console.log('Executando Promise 2...'))
//     .then(esperarPor)
//     .then(console.log('Executando Promise 3...'))


function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function retornarValorRapido() {
    return 20
} //o 20 sera retornado dentro de uma promise por causa do async / como se o resolve fosse chamado automaticamente

async function executar() { //em vez de chamar .then() o await pode ser usado como se fosse um codigo sincrono (apesar de nao ser um)
    let valor = await retornarValorRapido()
    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}

async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade()

//executar().then(console.log) //then precisa ser usado(escopo global) porque essa funcao precisa estar concluida para poder ser acessada