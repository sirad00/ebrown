//every returns true if every element in the array passes the criteria, and false otherwise. 
//every will stop looking and return false if it finds an element that doesn’t match the criteria; 
//otherwise, it will have to scan the entire array

const arr = [4, 6, 16, 36];
var tz1 = arr.every(x => x % 2 === 0);
var tz2 = arr.every(x => Number.isInteger(Math.sqrt(x)));
console.log(tz1); // no odd numbers
console.log(tz2); // 6 is not square

//done :)