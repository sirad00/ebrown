// The concat method adds multiple elements to the array and returns a copy.  

// If you pass concat arrays, it will break apart those arrays and add their elements to the original array.


const arr = [1, 2, 3];
console.log(arr.concat(4, 5, 6));
console.log(arr.concat([4, 5, 6]));
console.log(arr.concat([4, 5], 6));
console.log(arr.concat([4, [5, 6]]));
//not very clear to me, but let's go on..