bigArrayOfNumbers = [4, 8, 12];
function isPrime(num) {

    if (num === 2) {
        return true;
    }
    else if (num > 1) {
        for (var i = 2; i < num; i++) {

            if (num % i !== 0) {
                return true;
            }

            else if (num === i * i) {
                return false
            }

            else {
                return false;
            }
        }
    }
    else {
        return false;
    }

}

let i = 0;
for (; i < bigArrayOfNumbers.length; i++) {
    if (isPrime(bigArrayOfNumbers[i])) break;
}
if (i === bigArrayOfNumbers.length) console.log('No prime numbers!');
else console.log(`First prime number found at position ${i}`);
console.log(isPrime(911));