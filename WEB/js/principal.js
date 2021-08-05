var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelectorAll(".paciente");
console.log(paciente.length);

var tdPeso;
var peso;
var tdAltura;
var altura;
var tdImc;
var valido = true;
for(var i = 0; i < paciente.length; i++){
    tdPeso = paciente[i].querySelector(".info-peso");
    peso = tdPeso.textContent;

    tdAltura = paciente[i].querySelector(".info-altura");
    altura = tdAltura.textContent;

    tdImc = paciente[i].querySelector(".info-imc");
    
    if(peso <= 0 || peso > 500){
        tdImc.textContent = "Peso inválido!";
        valido = false;
        paciente.classList.add("paciente-invalido");
    }
    
    if(altura <= 0 || altura > 4.00){
        tdImc.textContent = "Altura inválida!";
        valido = false;
        paciente.classList.add("paciente-invalido");
    }
    
    if(valido){
        var imc = peso/(altura*altura);
        tdImc.textContent = imc.toFixed(2);    
    }
}

titulo.addEventListener("click", function (event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");
    
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    
    pacienteTr.appendChild(nomeTd, pesoTd, alturaTd, gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

});

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (){
    console.log("Oi, cliquei no botão!");
});