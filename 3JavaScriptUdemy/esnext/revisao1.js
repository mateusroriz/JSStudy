// let e const 
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)
// console.log(b) // let tem escopo de bloco entao nao pode ser acessada nesse escopo global

// Template String

const produto = 'celular'

console.log(`${produto} eh caro!`)

// Destructuring
//tirando de string
const [l, e, ...tras] = "Coder" //colocando c = l, e = o, e "d e r" em tras
console.log(l, e, tras)

//tirando de array
const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9 } //adicionando propriedade de objetos para variaveis separadas
console.log(i, nome)
