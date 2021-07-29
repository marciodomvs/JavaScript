console.log(`Trabalhando com loops\n`);

const listaDeDestinos = new Array("Salvador","São Paulo","Rio de Janeiro", "Curitiba");
const idadeComprador = 18;
const estaAcompanhada = true;
let podeComprar = false;
const destino = "Salvador";
let contador = 0;
let destinoExiste = false;

console.log(`Destinos possíveis: ${listaDeDestinos}`);
if(idadeComprador >= 18 || estaAcompanhada){
    podeComprar = true;
    console.log("Comprador é maior de idade ou está acompanhado");
    listaDeDestinos.splice(2,1);
}else console.log("Comprador não é maior de idade e não está acompanhado\n");

while(contador < 3){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador++;
}
if(destinoExiste) console.log("Destino Existe!!! - WHILE");
else console.log("Destino não existe!!! - WHILE");

if(podeComprar && destinoExiste) console.log("Boa viagem!!! - WHILE");
else console.log("Deu algum erro! - WHILE");

for(let i = 0; i < 3; i ++){
    if(listaDeDestinos[i] == destino){
        destinoExiste = true;
        break;
    }
}
if(destinoExiste) console.log("Destino Existe!!! - FOR");
else console.log("Destino não existe!!! - FOR");

if(podeComprar && destinoExiste) console.log("Boa viagem!!! - FOR");
else console.log("Deu algum erro! - FOR");

//bolinha vermelha do lado da linha serve pra executar o code até ela
//debugger serve pra debugar o code linha a linha entrando nos laços