if (isPrime(n)) {
    label = 'prime';
} else {
    label = 'non-prime';
}

//or
label = isPrime(n) ? 'prime' : 'non-prime';

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (!options) options = {};
// can be easily translated to:
options = options || {};