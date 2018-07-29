const obj = { b: 2, c: 3, d: 4 };
let a, b, c;
// this produces an error:
// {a, b, c} = obj;
// this works:
({a, b, c} = obj);
// a normal array
const arr = [1, 2, 3];
// array destructuring assignment
let [x, y] = arr;
x;
// 1
y;
// 2
// z;
// // error: z hasn't been defined

let m = 5, n = 10;
[m, n] = [n, m];
m;
// 10
n;
console.log(m,n);