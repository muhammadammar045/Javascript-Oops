class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Parent extends Person {

    constructor(name, age, job, health) {
        super(name, age);
        this.job = job;
        this.health = health;
    }

    displayJob() {
        console.log(`${this.name} is a ${this.job}.`);
    }

    displayHealth() {
        console.log(`${this.name} Health Status :  ${this.health}`);
    }
}

class Child extends Person {

    constructor(name, age, grade, clever) {
        super(name, age);
        this.grade = grade;
        this.clever = clever
    }

    displayGrade() {
        console.log(`${this.name} is in ${this.grade} grade.`);
    }
    displayClever() {
        console.log(`${this.name} is  Clever :  ${this.clever}`);
    }
}

const father = new Parent("John", 40, "Engineer", "Healthy");
const son = new Child("Sam", 10, 5, true);

console.log('===========================================================================')

father.introduce();
father.displayJob();
father.displayHealth();

console.log('===========================================================================')

son.introduce();
son.displayGrade();
son.displayClever();

console.log('===========================================================================')
