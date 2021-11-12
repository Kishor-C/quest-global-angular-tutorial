users = [{name:"Alex", age:35}, {name:"Bruce", age:40}];
// old approach
document.write("<table border = '1'><tr><th>Name</th><th>Age</th></tr>");
for(u of users) {
    document.write("<tr><td>"+u.name+"</td><td>"+u.age+"</td></tr>");
}
document.write("</table>");
// new apporach with template literals
document.write("<h2>Table with Template Literals</h2>")
document.write("<table border = '1'><tr><th>Name</th><th>Age</th></tr>");
for(u of users) {
    document.write(`<tr><td>${u.name}</td><td>${u.age}</td></tr>`);
}
document.write("</table>");
// creating a dynamic url with template literals
let id = 1;
let ename = "Ajay";
let age = 35;
let url = `http://domain.com/employee/${id}/${ename}/${age}`;
document.write(`<p>Url:${url}</p>`);

