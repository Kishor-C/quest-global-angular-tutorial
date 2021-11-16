"use strict";
exports.__esModule = true;
exports.Hello = exports.test = exports.items = void 0;
exports.items = ["Laptop", "TV", "Mobile"];
function test() {
    console.log("test() function");
}
exports.test = test;
var Hello = /** @class */ (function () {
    function Hello() {
    }
    Hello.prototype.hi = function () {
        console.log("hi() inside Hello");
    };
    return Hello;
}());
exports.Hello = Hello;
