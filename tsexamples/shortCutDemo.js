var Employee = /** @class */ (function () {
    function Employee(id, name) {
        this.id = id;
        this.name = name;
    }
    // the above code creates id & name properties which are public
    Employee.prototype.display = function () {
        console.log("Id = " + this.id + ", Name = " + this.name);
    };
    return Employee;
}());
var e1 = new Employee(100, "Alex");
var e2 = new Employee(200, "Bruce");
e1.display();
e2.display();
