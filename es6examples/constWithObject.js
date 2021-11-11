// to make the object properties immutable
const user = Object.freeze({username:"Alex", age : 30});

document.write("<p>Username:"+user.username+"</p>");
document.write("<p>Age:"+user.age+"</p>");

user.username = "Bruce";
user.age = 35;

document.write("<p>Username:"+user.username+"</p>");
document.write("<p>Age:"+user.age+"</p>");

