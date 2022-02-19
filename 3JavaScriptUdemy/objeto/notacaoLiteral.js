const a = 1
const b = 2
const c = 3

//como era antigamente
const obj1 = { a: a, b: b, c: c }
const obj2 = { a, b, c } //depois do ecmascript2015 pode ser feito assim caso o nome do atributo for o mesmo
console.log(obj1, obj2)


const nomeAtr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAtr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAtr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1 : function(){
        // ...
    },
    funcao2(){
        // ...
    }
}

console.log(obj5)