



function calc(operacoes){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var result;


    switch(operacoes){
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

    document.getElementById("result").value = result;

}