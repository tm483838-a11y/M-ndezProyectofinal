document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("calcularIMC").addEventListener("click", function () {

        let peso = parseFloat(document.getElementById("peso").value);
        let altura = parseFloat(document.getElementById("altura").value);

        if (isNaN(peso) || isNaN(altura) || altura <= 0) {
            document.getElementById("resultado").textContent =
                "Por favor, ingresá tu peso y tu altura.";
            return;
        }

        let imc = peso / (altura * altura);

        let mensaje = "";

        if (imc < 18.5) {
            mensaje = "Bajo peso";
        } else if (imc < 25) {
            mensaje = "Peso normal";
        } else if (imc < 30) {
            mensaje = "Sobrepeso";
        } else {
            mensaje = "Obesidad";
        }

        document.getElementById("resultado").textContent =
            "Tu IMC es: " + imc.toFixed(2) + " - " + mensaje;
    });

});