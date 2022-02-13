let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports) //module.exports "significaria o msm" que this


comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) //this de arrowFunction nao eh sobrescrito nem com bind
comparaComThisArrow(module.exports)