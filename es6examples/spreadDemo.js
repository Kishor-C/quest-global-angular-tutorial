function test(a, b, c) {
    document.write("<p>a = "+a+", b = "+b+", c = "+c+"</p>");
}
function demo(x, y, ...z) {
    document.write("<p>x = "+x+", y = "+y+", z = "+z+"</p>");
}

var items1 = [10, 20, 30];
var items2 = [100, 200, 300, 400, 500];
test(...items1); // values of array is spread across the parameter of test
demo(...items2); // x = 100, y = 200, z = 300, 400, 500

