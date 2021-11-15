class Employee {
    constructor(public readonly id : number, public name : string) { }
    // the above code creates id & name properties which are public
    public display() : void {
        console.log("Id = "+this.id+", Name = "+this.name);
    }
}
let e1 : Employee = new Employee(100, "Alex");
let e2 : Employee = new Employee(200, "Bruce");

e1.display();
e2.display();