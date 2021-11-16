// now while calling hello the variable can expect a value of 
// specific type
function hello(a) {
    return a;
}
var x = hello("welcome");
var y = hello(20);
console.log("x = " + x + ", y = " + y);
