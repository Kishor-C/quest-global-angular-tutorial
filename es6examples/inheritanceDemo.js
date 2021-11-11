class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log("Name = "+this.name+", Age = "+this.age);
    }
}
class Employee extends Person {
    constructor(name, age) {
        super(name,age); // this calls super class constructor
    }
}
var e = new Employee("Raj", 35);
e.display();