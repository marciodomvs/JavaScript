var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelectorAll(".paciente");
console.log(paciente.length);

var tdPeso;
var peso;
var tdAltura;
var altura;
var tdImc;
var imc;
for(var i = 0; i < paciente.length; i++){
    tdPeso = paciente[i].querySelector(".info-peso");
    peso = tdPeso.textContent;

    tdAltura = paciente[i].querySelector(".info-altura");
    altura = tdAltura.textContent;

    tdImc = paciente[i].querySelector(".info-imc");
    
    imc = calcula_imc(peso, altura);
    if(imc == "Peso inválido!" || imc == "Altura inválida!") paciente[i].classList.add("paciente-invalido");
    tdImc.textContent = imc;
}

function calcula_imc(peso, altura){
    if(peso <= 0 || peso > 500) return "Peso inválido!";
    
    if(altura <= 0 || altura > 4.00) return "Altura inválida!";
    
    var imc = peso/(altura*altura);
    return imc.toFixed(2);
}