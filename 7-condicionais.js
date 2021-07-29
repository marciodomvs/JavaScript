console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array("Salvador","São Paulo","Rio de Janeiro", "Curitiba");
const idadeComprador = 17;
console.log(`Destinos possíveis: ${listaDeDestinos}`);
const estaAcompanhada = true;

if(idadeComprador >= 18){ //se comprador é maior de idade, libera para compra e tira da lista
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1,1);
}else{
    console.log("Comprador não é maior de idade"); //pessoa é menor de idade
    if(estaAcompanhada){
        console.log("Comprador maior de idade");
        listaDeDestinos.splice(1,1);
    }else console.log("Não está acompanhado");
}
console.log(`Destinos possíveis: ${listaDeDestinos}`);

console.log(idadeComprador < 18);
console.log(idadeComprador > 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador == 18);
//operadores lógicos, retorn is boolean (true or false)