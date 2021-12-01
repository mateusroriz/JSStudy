console.log(`\n Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos possíveis:")
console.log(listaDeDestinos);


const podeComprar =  (idadeComprador >= 18 || estaAcompanhada );

let contador = 0;

let destinoExiste = false;

while(contador < listaDeDestinos.length){

  if(listaDeDestinos[contador] == destino){
    destinoExiste = true;
    break; // sair do while 
  }
    contador++;
}

console.log("Destino Existe: ", destinoExiste)

if(podeComprar && destinoExiste){
  console.log("Boa Viagem");
}else{
  console.log("Desculpe tivemos um erro");
}


for(let i = 0 ; i < listaDeDestinos.length ; i++){

  if(listaDeDestinos[i] == destino){
    destinoExiste = true;
     break; // sair do while 
  }
}