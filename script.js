


// funcionaliade da calculadora
function calc(operacoes) {

    // variariaveis
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var result;

    // logica das operacoes
    switch (operacoes) {
        case '+': result = num1 + num2;
            break;

        case '-': result = num1 - num2;
            break;

        case '*': result = num1 * num2;
            break;

        case '/': result = num1 / num2;
            break;

        default:
            result = "invalido";
    }

    // resultado
    document.getElementById("result").value = result;

    var newHistory = "<div>" + num1 + " " + operacoes + " " + num2 + " " + " = " + result + "</div>";

    document.getElementById("history").innerHTML = newHistory + document.getElementById("history").innerHTML;

}

