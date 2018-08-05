// const f1 = function () { return "hello!"; }
// OR
// const f1 = () => "hello!";
// const f2 = function (name) { return `Hello, ${name}!`; }
// this.name = "Daris";
// OR
// const f2 = name => `Hello, ${name}!`;
// name = "Daris";
// const f3 = function (a, b) { return a + b; }
// OR
// const f3 = (a, b) => a + b;
// console.log(f3(1, 2));

const o = {
    name: 'Julie',
    greetBackwards: function () {
        const getReverseName = () => {
            let nameBackwards = '';
            for (let i = this.name.length - 1; i >= 0; i--) {
                nameBackwards += this.name[i];
            }
            return nameBackwards;
        };
        return `${getReverseName()} si eman ym ,olleH`;
    },
};
o.greetBackwards();
console.log(o.greetBackwards());