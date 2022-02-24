console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Marcos', 'Joao', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Pedro'
console.log(aprovados)
aprovados.push('Lucas')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados)

aprovados.sort() //altera o array
console.log(aprovados)

delete aprovados[1] //o array nao eh ordenado
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Marcos', 'Joao', 'Ana']
aprovados.splice(1, 1)
console.log(aprovados)