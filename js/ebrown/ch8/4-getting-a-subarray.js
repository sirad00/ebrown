// The first argument is where the subarray begins, and the second argument is where the subarray ends.

// If you omit the end argument, it returns everything up to the end of the string.


const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(3));
console.log(arr.slice(1,3));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));
console.log(arr.slice(-2, -1));

//done! :) 