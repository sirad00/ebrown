//The first argument is the index you want to start modifying; 
//the second argument is the number of elements to remove 
//(use 0 if you don’t want to remove any elements), and the remaining arguments are the elements to be added.

const arr = [1, 5, 7];
console.log(arr.splice(1, 0, 2, 3, 4));
console.log(arr.splice(5, 0, 6));
console.log(arr.splice(1, 2));
console.log(arr.splice(2, 1, 'a', 'b'));

//doneeee