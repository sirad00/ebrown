bigArrayOfNumbers = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 17, 18, 23, 28]
let i = 0;
for (; i < bigArrayOfNumbers.length; i++) {
    if (isPrime(bigArrayOfNumbers[i])) break;
}
if (i === bigArrayOfNumbers.length) console.log('No prime numbers!');
else console.log(`First prime number found at position ${i}`);