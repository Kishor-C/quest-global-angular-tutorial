// mention only the file name
import {Hello, items, test} from './common'; 

/*
 The import will import all the three components 
*/

let a : Hello = new Hello();
a.hi(); // hi is inside Hello
// items is having list of values
items.forEach(i => console.log(i));
// using test function
test();