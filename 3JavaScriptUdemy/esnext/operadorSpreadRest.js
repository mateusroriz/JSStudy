// operador ... rest(juntar)/spread(espalhar)
// usar rest com parametro de funcao

//usar spread com objeto
const funcionario = { nome: 'Anon', salario: 12345.99 }
const clone = { ativo: true, ...funcionario } //pegando os atributos de funcionario e espalhando no novo objeto
console.log(clone)

// usar spread com array
const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)