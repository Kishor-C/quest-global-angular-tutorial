// now function should be called by passing number or string
function printId(userId) {
    console.log("User Id = " + userId);
}
function test(x) {
    if (x < 0) {
        return "Need to be positive";
    }
    else {
        return x;
    }
}
function getFirstTwo(x) {
    console.log(x.slice(0, 2));
}
// Now you can call printId by passing either number or string
printId(155);
printId("User155");
var r = test(10);
console.log("Result = " + r);
getFirstTwo("Welcome");
getFirstTwo([8, 9, 10, 11]);
