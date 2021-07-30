class Cliente{ 
    nome;
    CPF;
}

class ContaCorrente{
    agencia;
    //#saldo = 0; //private de verdade, porém ainda não é oficial
    _saldo = 0; //private
    
    sacar(valor){
        if(this._saldo >= valor){ //this usa a variável de origem do chamado de função
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor > 0) this._saldo += valor;
    }
}

//cliente 1
const cliente1 = new Cliente(); //cria um novo cliente
cliente1.nome = "Ricardo"; //atribuição
cliente1.CPF = 11122233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(-100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(`Valor Sacado: ${valorSacado}`);
console.log(contaCorrenteRicardo);

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