// 3 dots in the prefix is a rest operator to accept 0 or more arguments
function add(a = 0, ...b) {
    document.write("<p>a = "+a+"</p>");
    document.write("<p>b = "+b+"</p>");
    let sum = a;
    for(var i = 0; i < b.length; i++) {
        sum = sum + b[i];
    }
    document.write("<p>Sum = "+sum+"</p>");
    document.write("--------------------")
    //document.write("<p>Sum = "+sum+"</p>");
}
add();
add(5); // a takes 5, but b is empty 
add(10, 20); // a takes 10 b takes 20
add(20, 30, 10, 40); // here a takes 20, b takes [30, 10, 40]

