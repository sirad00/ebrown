// copyWithin, takes a sequence of elements from an  array and copies them, in place, 
// to a different part of the array, overwriting whatever elements are there. 

// The first argument is where to copy to (the target), 
// The second argument is where to start copying from
// And the final (optional) argument is where to stop copying from.


// const arr = [1, 2, 3, 4];
// console.log(arr.copyWithin(1, 2));
// console.log(arr.copyWithin(2, 0, 2));
// console.log(arr.copyWithin(0, -3, -1));

[1, 2, 3, 4, 5].copyWithin(-2);
// [1, 2, 3, 1, 2]

[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, 3, 4);
// [4, 2, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(-2, -3, -1);
// [1, 2, 3, 3, 4]

//done 