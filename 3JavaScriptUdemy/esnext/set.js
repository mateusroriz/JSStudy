// nao aceita repeticao/ nao indexada
const times = new Set()
times.add('Flamengo')
times.add('Palmeiras').add('Corinthias').add('Vasco')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('flamengo'))
console.log(times.has('Flamengo'))
times.delete('Vasco')
console.log(times.has('Vasco'))

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)