// to print some content in the web page 
document.write("<h3>Welcome to let example</h3>")
for(var x = 1; x <= 5; x++) {
    document.write("<p> x = "+x+"</p>");  
    console.log("x = "+x); // it is used to print in browser console
    var y = 25; // it is declared inside the for loop
    let z = 35;
    document.write("<p>z inside for loop = "+z+"</p>")
}
// you can access var outside the scope because they are global
document.write("<p>y = "+y+"</p>");
document.write("<p>z outside for loop = "+z+"</p>")