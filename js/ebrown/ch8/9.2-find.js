// FIND returns the element itself instead of the index (or null if no such element was found):

const arr = [{ id: 5, name: "Judith" }, { id: 7, name: "Francis" }];
var rez = arr.find(o => o.id === 5);
var rez1 = arr.find(o => o.id === 2);
console.log(rez);
console.log(rez1);

const arr1 = [1, 17, 16, 5, 4, 16, 10, 3, 49];
var tz = arr1.find((x, i) => i > 2 && Number.isInteger(Math.sqrt(x)));
console.log(tz);

//done