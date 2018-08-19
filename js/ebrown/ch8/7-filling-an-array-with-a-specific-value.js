// fill allows you to set any number of elements with a fixed value (in place). 
// This is particularly useful when used with the Array constructor (which allows you to specify the initial size of the array).
// You can optionally specify a start and end index if you only want to fill part of the array 

const arr = new Array(5).fill(1);
console.log(arr);
console.log(arr.fill("a"));
console.log(arr.fill("b", 1));
console.log(arr.fill("c", 2, 4));
console.log(arr.fill(5.5, -4));
console.log(arr.fill(0, -3, -1));

//done