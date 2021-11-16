interface Employee { 
    ename : string;
    age: number;
} 
interface Employee { 
    gender : string;
}
interface Manager extends Employee { 
    empCount : number;
}
let emp : Employee = {ename:"Alex", age:30, gender:"Male"};
console.log(emp);
let mgr : Manager = {ename:"Raj", age:45, gender:"Male", empCount:30};
console.log(mgr);