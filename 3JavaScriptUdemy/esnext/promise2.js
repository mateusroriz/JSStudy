// setTimeout(function () {
//     console.log('Executando callback...')
//     setTimeout(function () {
//         console.log('Executando callback...')
//         setTimeout(function () {
//             console.log('Executando callback...')
//         }, 2000)
//     }, 2000)
// }, 2000) //callback hell

function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log('Executando promise')
            resolve()
        }, tempo)
    })
}

esperarPor()
    .then(() => esperarPor(3000))
    .then(esperarPor) //a referencia da funcao pode ser passada ja que nenhum parametro esta sendo passado