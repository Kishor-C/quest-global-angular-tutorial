let x = 30;
var y = 40; // it is attached to the global object 
console.log("x = "+x);
console.log("window.x = "+window.x);
console.log("y = "+y);
console.log("window.y = "+window.y);
for(var i = 1; i <= 3; i++) {
    var z = 45;
}
console.log("window.z = "+window.z);