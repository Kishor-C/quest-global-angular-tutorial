// string types
let firstname : string = "Alexandar";
// number type
let age : number = 30;
// boolean type
let isAdmin : boolean = false;
// string arrays
let skills : string[] = ["Java", "Angular", "React.js"];
// a variable to hold various type of value
let x : any = 10;
x = "Hello World";
//function with number return type 
function add(x : number, y : number) : number {
    return x + y;
}
let sum: number = add(20, 30);
console.log("Name = "+firstname);
console.log("Age = "+age);
console.log("IsAdmin = "+isAdmin);
console.log("Skills = "+skills);
console.log("Sum = "+sum);