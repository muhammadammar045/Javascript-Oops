class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    increaseAge() {
        this.age++;
        console.log(`${this.name}'s age has been increased. Now ${this.name} is ${this.age} years old.`);
    }

    decreaseAge() {
        this.age--;
        console.log(`${this.name}'s age has been increased. Now ${this.name} is ${this.age} years old.`);
    }
}

const person1 = new Person('AMMAR', 24);
console.log('===========================================================================')

console.log(`BEFORE INCREASE AGE : ${person1.age}`)

console.log('===========================================================================')

person1.greet();
person1.increaseAge();
person1.increaseAge();
person1.increaseAge();
person1.increaseAge();
person1.increaseAge();

console.log('===========================================================================')

console.log(`AFTER INCREASE AGE : ${person1.age}`)

console.log('===========================================================================')

person1.greet();
person1.decreaseAge();

console.log('===========================================================================')

console.log(`AFTER DECREASE AGE : ${person1.age}`)

console.log('===========================================================================')
console.log('===========================================================================')




