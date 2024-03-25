class Parent {

    hi() {
        console.log("I am public hi() you can access me")
    }
    static bye() {
        console.log("I am static bye() you cannot access me in child")
    }
}

class Child extends Parent {

    static greet = "Hello World"

    hello() {
        console.log("I am public hello() from child")
    }

    bye() {
        console.log("I am  bye() overridedd and will be available with my own functionality")
    }
}

const person1 = new Parent();
const person2 = new Child();



console.log('===========================================================================')

person1.hi();
Parent.bye() // Only class can call it not an instance 
//  person1.bye() // person1.bye is not a function bcz it is called by instance

console.log('===========================================================================')

person2.hi();
person2.bye() // now its reffering to its own function
// console.log(person2.greet) // undefined
console.log(Child.greet)

console.log('===========================================================================')
