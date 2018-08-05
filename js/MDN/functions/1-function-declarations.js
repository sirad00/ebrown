function square(number) {
    return number * number;
}
console.log(square(3));

function myFunc(theObject) {
    theObject.make = 'Toyota';
}

var mycar = { make: 'Honda', model: 'Accord', year: 1998 };

var x, y;
x = mycar.make; console.log(x);

myFunc(mycar);

y = mycar.make; console.log(y);
console.log(mycar);