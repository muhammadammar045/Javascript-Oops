class Shape {
    constructor() {
        if (this.constructor === Shape) {
            throw new Error("Abstract classes cannot be instantiated.");
        }
    }

    // Abstract method to calculate area
    calculateArea() {
        throw new Error("Method 'calculateArea()' must be implemented.");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    // Implementation of abstract method
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    // Implementation of abstract method
    calculateArea() {
        return this.width * this.height;
    }
}

// Abstract class cannot be instantiated
// const shape = new Shape(); // Error: Abstract classes cannot be instantiated.

const circle = new Circle(5);
console.log("Circle Area:", circle.calculateArea()); // Output: Circle Area: 78.53981633974483

const rectangle = new Rectangle(4, 6);
console.log("Rectangle Area:", rectangle.calculateArea()); // Output: Rectangle Area: 24
