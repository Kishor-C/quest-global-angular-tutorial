var Emp = /** @class */ (function () {
    function Emp(id, name) {
        this.id = id;
        this.name = name;
    }
    // getter methods for id & name
    Emp.prototype.getId = function () {
        return this.id;
    };
    Emp.prototype.getName = function () {
        return this.name;
    };
    Emp.prototype.setId = function (id) {
        this.id = id;
    };
    Emp.prototype.setName = function (name) {
        this.name = name;
    };
    return Emp;
}());
var e = new Emp(100, "Raj");
console.log(e.getId(), e.getName());
e.setName("Rajesh");
console.log(e.getId(), e.getName());
