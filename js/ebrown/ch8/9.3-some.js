// some returns true if it finds an element that meets the criteria 
// (all it needs is one; it’ll stop looking after it finds the first one), and false otherwise.


const arr = [5, 7, 12, 15, 18, 17];
var rez = arr.some(x => x%2===0);
var rez1 = arr.some(x => Number.isInteger(Math.sqrt(x)));

console.log(rez); //12 is even
console.log(rez1); // no squares