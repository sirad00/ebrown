var num1 = 20,
    num2 = 3,
    name = 'Chamahk';
function multiply() {
    return num1 * num2;
}
console.log(multiply());//returns 60

// A nested function example
function getScore() {
    var num1 = 2,
        num2 = 3;

    function add() {
        return name + ' scored ' + (num1 + num2);
    }

    return add();
}

getScore(); // Returns "Chamahk scored 5"
console.log(getScore());