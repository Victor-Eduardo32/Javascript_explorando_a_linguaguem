const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);


console.log(listaDeDestinos);
console.log(listaDeDestinos[1], listaDeDestinos[0]);

const idadeComprador = 21;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while(contador<3){
    if(listaDeDestinos[contador] = destino) {
        destinoExiste = true;
        break;
    } 

    contador += 1;
}

if(podeComprar && destidoExiste){
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro");
}

for(let i = 0 ; i < 3 ; i++){
    if(listaDeDestinos[contador] = destino) {
        destinoExiste = true;
        break;
    } 

}