const o = {
    name: 'Wallace',
    speak() { 
        return `My name is ${this.name}!`; },
}
o.speak();
console.log(o.speak());


const speak = o.speak;
speak === o.speak;
speak();
console.log(speak());