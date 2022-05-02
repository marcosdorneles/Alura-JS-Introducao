
var pacientes = document.querySelectorAll(".paciente"); // Cria a variável 'pacientes', que recebe os valores da classe paciente

for (var i = 0; i < pacientes.length; i++) { // Estrutura de repetição => Basicamente, funciona para poder receber individualmente os objetos da Array pacientes, ou seja, criar uma variável para cada paciente

    var paciente = pacientes[i]; // paciente recebe da lista de pacientes cada paciente

    var tdPeso = paciente.querySelector(".info-peso"); // info-peso é uma classe que todos os pacientes tem, se repete p/ altura
    var peso = tdPeso.textContent; // cria variável peso e declara ela recebendo o valor contido na classe info-peso

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura); // estudar isso => validaX é uma função que recebe um parâmetro de outra variável declarada globalmente

    if (!pesoEhValido) { // Se o peso não é valido:
        console.log("Peso inválido!");
        pesoEhValido = false; // => Aula de boas práticas
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }
    //

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

//=> Reassistir

function validaPeso(peso) {

    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}
