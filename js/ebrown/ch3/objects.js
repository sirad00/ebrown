// const obj = {};
// obj.size;
// obj.color;
// obj["not an identifier"] = 3;
// obj["not an identifier"];
// obj ["color"];
// const size = Symbol ();
// obj[size] = 8;
// obj[size];
// console.log(obj.size);

const sam1 = {
    name: 'Sam',
    age: 4,
};
const sam2 = {same: 'Sam', age: 4}; //delcaration on one line

const sam3 = {
    name: 'Sam',
    classification: {       //property vakues can be objects themselves
        kingdom: 'Anamalia',
        phylum: 'Chordata',
        class: 'Mamalia',
        order: 'Carnivoria',
        family: 'Felidae',
        subfamily: 'Felinae',
        genus: 'Felis',
        species: 'catus',
    },
};

// sam3.classification.family;
// sam3["classification"].family;
// sam3.classification["family"];
// sam3["clasification"][family];

sam3.speak = function() {return "Meow";};
sam3.speak();

console.log(sam3.speak());