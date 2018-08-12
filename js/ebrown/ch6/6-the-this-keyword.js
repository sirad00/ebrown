// const o = {
//     name: 'Darinuta',
//     speak() { 
//         return `My name is ${this.name}!`; },
// }
// var rez = o.speak();
// console.log(rez);


// const speak = o.speak;
// speak === o.speak;
// speak();
// console.log(speak("Daris"));

const o = {
    name: 'Julie',
    greetBackwards: function () {
        const self = this;
        function getReverseName() {
            let nameBackwards = '';
            for (let i = self.name.length-1; i >= 0; i--) {
                nameBackwards += self.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym ,olleH`;
    }
};
// o.greetBackwards();
console.log(o.greetBackwards());