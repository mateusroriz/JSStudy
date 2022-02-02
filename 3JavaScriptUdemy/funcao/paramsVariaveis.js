function soma(){
    let montante =0;
    for (i in arguments){
        montante += arguments[i]
    }
    return montante
}

//o operador rest/spread ja faz isso // mas antigamente era feito assim
console.log(soma())
console.log(soma(1))
console.log(soma(4, 2))
console.log(soma(2, 7, "teste"))
console.log(soma('um', 'dois', 'tres'))