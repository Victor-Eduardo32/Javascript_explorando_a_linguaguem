const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`);


console.log(listaDeDestinos);
console.log(listaDeDestinos[1], listaDeDestinos[0]);

const idadeComprador = 21;
const estaAcompanhada = false;
const temPassagemComprada = true;

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Comprador é maior de idade");
    listaDeDestinos.splice(1, 1);
} else {
    console.log("Não é maior de idade e não posso vender");
}

console.log("Embarque \n\n")
if(idadeComprador > 18 && temPassagemComprada){
    console.log("Boa viagem");
}else{
    console.log("Você não pode embarcar");
}