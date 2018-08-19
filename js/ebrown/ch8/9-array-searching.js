
class Person {
    constructor(name) {
        this.name = name;
        this.id = Person.nextId++;
    }
}
Person.nextId = 0;
const jamie = new Person("Jamie"),
    juliet = new Person("Juliet"),
    peter = new Person("Peter"),
    jay = new Person("Jay");
const arr = [jamie, juliet, peter, jay];
var rez1 = arr.find(p => p.id === juliet.id);
var rez2 = arr.find(p => p.id === this.id, juliet);


console.log(rez1);
console.log(rez2);

////????? 