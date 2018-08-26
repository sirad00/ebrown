// class Car {
//     constructor() {
//     }
// }
// const car1 = new Car();
// const car2 = new Car();
// console.log(car1 instanceof Car);
// console.log(car1 instanceof Array);

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.userGears = ['P', 'N', 'R', 'D'];
        this.userGear = this.userGears[0];
    }
    shift(gear) {
        if (this.userGears.indexOf(gear) < 0)
            throw new Error(`Invalid gear: ${gear}`);
        if (this.userGear=='D'&& gear == 'R')
            throw new Error(`Can't R from D`);
        this.userGear = gear;
    
    }
}
const car1 = new Car("Tesla", "Model S");
// const car2 = new Car("Mazda", "3i");

car1.shift('D');
// car1.shift('R');
car1.userGear = 'tz';
console.log(car1);