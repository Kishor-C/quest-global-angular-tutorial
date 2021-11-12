let items = [1, 2, 3, 4];
// generating a different result from the array
// map() function takes one function as a parameter
let z = 10;
let anotherItems = items.map(function(i){
    return i * z;
});
document.write(`<p>Items: ${items}</p>`);
document.write(`<p>Generated Items: ${anotherItems}</p>`);
// arrow function reduces the code 
let oneMoreItems = items.map((x) => x * 5);
document.write(`<p>One More Items: ${oneMoreItems}</p>`);
// arrow function with multiple statements - you need { } & return also
let fewMoreItems = items.map((x) => { 
    console.log(x);
    return x * z;
});
document.write(`<p>One More Items: ${fewMoreItems}</p>`);
