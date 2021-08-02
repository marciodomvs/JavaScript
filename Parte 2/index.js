import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

//cliente 1
const cliente1 = new Cliente("Ricardo", 11122233309); //cria um novo cliente
// cliente1.nome = "Ricardo"; //atribuição
// cliente1.CPF = 11122233309;

const conta1 = new ContaCorrente(cliente1, 1001);
// conta1.agencia = 1001;
// conta1.cliente = cliente1;
conta1.depositar(500);

// contaCorrenteRicardo.depositar(-100);
// contaCorrenteRicardo.depositar(100);
// contaCorrenteRicardo.depositar(100);
// const valorSacado = contaCorrenteRicardo.sacar(50);
// console.log(`Valor Sacado: ${valorSacado}`);

//cliente 2
const cliente2 = new Cliente("Alice", 88822233309); //cria um novo cliente
// cliente1.nome = "Alice"; //atribuição
// cliente1.CPF = 88822233309;

const conta2 = new ContaCorrente(cliente2, 1002);
// conta2.cliente = cliente2;
// conta2.agencia = 1002;

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);
//conta2.saldo = 30000; não funciona

//imprimindo contas
console.log(conta1);
console.log(conta2);
console.log(ContaCorrente.numeroDeContas);


//cliente 2
/*const cliente2 = new Cliente(); //cria um novo cliente
cliente1.nome = "Alice"; //atribuição
cliente1.CPF = 88822233309;

const contaCorrenteAlice = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.saldo = 0;

contaCorrenteRicardo.depositar(300);
contaCorrenteRicardo.sacar(400);
console.log(contaCorrenteRicardo);*/