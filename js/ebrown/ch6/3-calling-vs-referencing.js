function getGreeting() {
   return "Hello world!";
}
// // getGreeting();
// getGreeting;

const f = getGreeting;
f();
console.log(f());

const o = {};
o.f = getGreeting;
o.f();
console.log(o.f());

const arr = [1, 2, 3];
arr[1] = getGreeting;
arr[1]();
console.log(arr[1]);
console.log(arr[1]());
console.log(arr);