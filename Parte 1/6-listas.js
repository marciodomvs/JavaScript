console.log(`Trabalhando com listas`);

const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;
console.log(`Destinos possíveis: ${salvador}, ${saoPaulo}, ${rioDeJaneiro}`);
//prática ruim
//ctrl + kc = comenta tudo selecionado; ctrl + ku = descomenta tudo selecionado

const listaDeDestinos = new Array("Salvador","São Paulo","Rio de Janeiro"); //new é uma palavra reservada
listaDeDestinos.push("Curitiba"); //adicionando um item na lista, da pra fazer push em variaveis const
console.log(`Destinos possíveis: ${listaDeDestinos}`);

listaDeDestinos.splice(1,1); //deleta elemento da lista -> (referencia do elemento, numero de elementos que vai ser excluido a partir da posição de referencia)
console.log(`Destinos possíveis: ${listaDeDestinos}`);
console.log(listaDeDestinos[1], listaDeDestinos[0]); //printando posição especifica da lista