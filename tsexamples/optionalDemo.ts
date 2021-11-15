// optional properties
let user : {first: string, last?: string, phone?:number}
// the user object can have last & phone as optional properties
// user with all the properties
user = {first: "Alex", last: "Max", phone: 9938383};
console.log(user);
// user with first & phone
user = {first: "Bruce", phone: 2888};
console.log(user);
// user with only first
user = {first: "Sachin"}
console.log(user);

function printX(x: number, y?:number) {
    console.log("x = "+x+", y = "+y);
}
printX(10);
printX(20, 30);