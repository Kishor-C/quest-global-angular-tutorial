var items = [25, 35, 30, 20];
var emp = {ename:"Raj", age:35}
// to assign value of each item to separate variables 
//you need to access index
var a = items[0];
var b = items[1];
var c = items[2];
var d = items[3];
// if you want to assign employee properties to separate variables
var n = emp.ename;
var a1 = emp.age;
document.write("<p>a = "+a+",b = "+b+",c = "+c+",d = "+d+"<p>");
document.write("<p>n = "+n+",a1 = "+a1+"<p>");
// object destructuring in one line
let [i, j, k, l] = items;
document.write("<p>i = "+i+",j = "+j+",k = "+k+",l = "+l+"<p>");

let {ename, age} = emp; 
// emp.name assigns to username & user.age to userage
document.write("<p>username = "+ename+", userage = "+age+"</p>");