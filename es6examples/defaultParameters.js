// function takes one argument
function sayHello(username = "Ajay"){
    // if you want to give some default values before es6
    //username = typeof username != "undefined" ? username : "Rajesh";
    document.write("<p>Hello, "+username+"</p>");
}
sayHello("Alexandar");
sayHello(); // it can still call sayHello but username gets default value