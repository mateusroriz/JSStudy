const fs = require('fs')
const path = require('path')

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function (_, conteudo) { // isso eh assincrono / primeiro parametro eh erro e o segundo e o conteudo do arquivo
            resolve(conteudo.toString())
        })
    })
}


const caminho = path.join(__dirname, 'dados.txt')

lerArquivo(caminho)
    // .then(conteudo => conteudo.split('\n'))
    // .then(linhas => linhas.join(','))
    // .then(conteudo => `O valor final eh: ${conteudo}`)
    .then(console.log)