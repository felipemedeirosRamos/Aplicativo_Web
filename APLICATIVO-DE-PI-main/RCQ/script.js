javascript
function calcularRCQ() {
    var cintura = document.getElementById("cintura").value;
    var quadril = document.getElementById("quadril").value;

    if (cintura === "" || quadril === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    var rcq = cintura / quadril;
    var resultado = "";

    if (rcq >= 0.90 && rcq < 0.95) {
        resultado = "RCQ normal (risco médio para doenças do coração).";
    } else if (rcq >= 0.85 && rcq < 0.90) {
        resultado = "RCQ normal (risco elevado para doenças do coração).";
    } else if (rcq < 0.85) {
        resultado = "RCQ normal (risco muito elevado para doenças do coração).";
    } else {
        resultado = "RCQ acima do normal (risco para doenças do coração).";
    }

    document.getElementById("resultado").innerHTML = resultado;
}

