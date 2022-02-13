const fabricantes = ["Mercedes", "Audi", "Ford"]


function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}


fabricantes.forEach(imprimir) //fabricantes tem a funcao forEach pois eh um array

fabricantes.forEach(fabricante => { console.log(fabricante) })