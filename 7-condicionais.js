console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array("Salvador","São Paulo","Rio de Janeiro", "Curitiba");
const idadeComprador = 17;
const estaAcompanhada = true;
let temPassagemComprada = false;

console.log(`Destinos possíveis: ${listaDeDestinos}`);
if(idadeComprador >= 18 || estaAcompanhada){ //se comprador é maior de idade, libera para compra e tira da lista
    temPassagemComprada = true;
    console.log("Comprador é maior de idade ou está acompanhado");
    listaDeDestinos.splice(2,1);
}else console.log("Comprador não é maior de idade e não está acompanhado\n"); //pessoa é menor de idade

console.log("Embarque: \n\n");
if(temPassagemComprada) console.log("Boa viagem!!!")
else console.log("Você não pode embarcar");

console.log(idadeComprador < 18);
console.log(idadeComprador > 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador == 18);
//operadores lógicos, retorn is boolean (true or false)