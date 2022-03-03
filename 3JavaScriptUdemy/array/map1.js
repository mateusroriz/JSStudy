const nums = [1, 2, 3, 4, 5]

//map eh For com proposito
let resultado = nums.map(function (e) { //o array original nao e afetado por map
    return e * 2
})

console.log(resultado)


const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) // como o retorno de map eh um array ele pode ser encadeado em outro map

console.log(resultado)