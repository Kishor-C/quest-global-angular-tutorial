class Person {
    // use constructor keyword to initialize the properties
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // you can create functions inside the class
    display() {
        document.write("<p>Name = "+this.name+", Age = "+this.age+"</p>");
    }
}
let p1 = new Person("Bruce", 35);
p1.display();