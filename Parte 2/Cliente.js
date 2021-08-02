export class Cliente{ 
    nome;
    _cpf;

    constructor(nome, CPF){
        this.nome = nome;
        this._cpf = CPF;
    }

    get cpf(){
        return this._cpf;
    }
}