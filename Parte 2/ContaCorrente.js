import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0;
    agencia;
    cliente;
    
    //#saldo = 0; //private de verdade, porém ainda não é oficial
    _saldo = 0; //private

    constructor(cliente, agencia){
        this.cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.numeroDeContas += 1;
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

    sacar(valor){
        if(this._saldo >= valor){ //this usa a variável de origem do chamado de função
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor > 0) this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}