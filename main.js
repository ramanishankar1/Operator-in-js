var num1 = parseInt(prompt("Enter num1"))
var num2 = parseInt(prompt("Enter num2"))
var operator = prompt("Enter operator");
function Arithmetic() {
    switch (operator) {

        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        case '*':
            return num1 * num2;
            break;
        case '/':
            return num1 / num2;
            break;
    }
    return Arithmetic;
}

 var res=Arithmetic();
console.log(res);