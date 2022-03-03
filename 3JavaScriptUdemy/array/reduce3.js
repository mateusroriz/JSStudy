Array.prototype.reduce2 = function (callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1 // se valor inicial estiver setado o indice inicial sera 0 senao 1
    let acumulador = valorInicial || this[0]
    for (let i = indiceInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this) // resultado da chamada do callback vai ser passado pro callback pra ser passado na proxima chamada
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma))
console.log(nums.reduce2(soma, 21))