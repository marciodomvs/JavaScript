console.log("Atribuição de variáveis");
const nome = "Márcio"; //bom costume
//let nome = "Márcio"; //variável local
const sobrenome = "Silva";

console.log(nome + " " + sobrenome);
console.log(`Meu nome é ${nome + sobrenome}`);

//nome = nome + " " +sobrenome; //não usar
const nomeCompleto = nome + " " +sobrenome;
console.log(nome);

let contador = 0;
contador = contador + 1; //bom costume, a varivel let é usada mais pra contadores e variáveis de transição

let idade; //declarando variavel
idade = 26; //atribuindo valor a variavel
idade = idade + 1; //reatribuindo idade
console.log(idade);