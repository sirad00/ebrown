bigArrayOfNumbers = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 17, 18, 23, 28]
// let firstPrime = null;
// for (let n of bigArrayOfNumbers) {
//     if (isPrime(n) && firstPrime === null) firstPrime = n;
// }
let firstPrime = null;
let isPrime = 2;
for (let n of bigArrayOfNumbers) {
    if (isPrime(n)) {
        firstPrime = n;
        break;
    }
}