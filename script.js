


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


    // logica do historico
    var newHistory = "<p>" + num1 + " " + operacoes + " " + num2 + " " + " = " + result + "</p>";

    // logica para mostrar o ultimo resultado no topo da lista
    var history = document.getElementById("history")
    document.getElementById("history").innerHTML = newHistory + history.innerHTML;

    // logica para limitar o historico a 10 resultados
    if (history.children.length > 10) {
        history.removeChild(history.childNodes[10])
    }



}

