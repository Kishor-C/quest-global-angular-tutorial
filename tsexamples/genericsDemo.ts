// now while calling hello the variable can expect a value of 
// specific type
function hello<T>(a : T): T {
    return a;
}

let x : string = hello<string>("welcome");
let y : number = hello<number>(20);
console.log("x = "+x+", y = "+y);