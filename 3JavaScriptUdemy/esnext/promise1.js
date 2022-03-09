const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()


new Promise(function (resolve) {
    resolve(['Marcos', 'Carlos', 'Joao', 'Pedro'])
})
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    // .then(v => console.log(v)) // pode ser substituido pelo de baixo
    .then(console.log)
