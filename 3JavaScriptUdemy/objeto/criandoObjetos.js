//usando a notacao literal
const obj1 = {}
console.log(obj1)

// Object em JS /
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funcoes construtoras
function Produto(nome, preco, desc) {
    this.nome = nome //atributo publico
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 8.00, 0.15)
const p2 = new Produto('Notebook', 3000.00, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Funcao Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Anon', 7980, 4)
const f2 = criarFuncionario('Paulo', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = "Pedro"
console.log(filha)

// Uma funcao famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um Json"}')
console.log(fromJSON.info)