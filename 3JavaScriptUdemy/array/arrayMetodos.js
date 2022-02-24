const pilotos = ['Vettel', 'Alonso', 'Raikoonen', 'Massa']
pilotos.pop() //retira ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos) //criar um novo elemento no final do array


pilotos.shift() //remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona um novo elemento no comeco do array
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') //indice, quantos remover, elementos a adicionar
console.log(pilotos)

//remover 
pilotos.splice(3, 1) //remove 1 item a partir do index 3
console.log(pilotos)


const algunsPilotos1 = pilotos.slice(2) //novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //do indice 1 ate o 4 mas o 4 nao entra
console.log(algunsPilotos2)
