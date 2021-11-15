// now function should be called by passing number or string
function printId(userId : string | number) {
    console.log("User Id = "+userId);
}
function test(x : number) : string | number {
    if(x < 0) {
        return "Need to be positive"
    } else {
        return x;
    }
}
function getFirstTwo(x : string | number[]) : void {
    // slice is present in string & array
    console.log(x.slice(0, 2));
}
// Now you can call printId by passing either number or string
printId(155);
printId("User155");
let r : string | number = test(10);
console.log("Result = "+r);
getFirstTwo("Welcome");
getFirstTwo([8, 9, 10, 11]);
