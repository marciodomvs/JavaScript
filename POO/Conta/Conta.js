//Classe abstrata -> somente pode ser herdada
export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta) throw new Error("Você não deveria instanciar a classe conta diretamente!"); //para o programa e dá erro para não chamar a classe da main
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente) this._cliente = novoValor;
    }

    get cliente(){
        return this._cliente;
    }
    
    get saldo(){
        return this._saldo;
    }

    //método abstrato
    sacar(valor){
        throw new Error("O método sacar da conta é abstrato!");
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){ //this usa a variável de origem do chamado de função
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor){
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}