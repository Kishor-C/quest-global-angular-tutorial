"use strict";
exports.__esModule = true;
// mention only the file name
var common_1 = require("./common");
/*
 The import will import all the three components
*/
var a = new common_1.Hello();
a.hi(); // hi is inside Hello
// items is having list of values
common_1.items.forEach(function (i) { return console.log(i); });
// using test function
(0, common_1.test)();
