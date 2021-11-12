let users = [
    {name : "Sachin", address : {state : "MH", city : "Mumbai"}},
    {name : "Virat", address : {state: "UP"}},
    {name : "Rohit"}
];
// for demo purpose we will access through index
console.log("Name = "+users[0].name
    +", State = "+users[0].address.state+", City = "+users[0].address.city);

console.log("Name = "+users[1].name
    +", State = "+users[1].address.state+", City = "+users[1].address.city);
// earlier you need to check whether the propery exists in if condition
if(users[2].address && users[2].address.state && users[2].address.city) {
    console.log("Name = "+users[2].name
    +", State = "+users[2].address.state+", City = "+users[2].address.city);
}
// new approach will allow you to safely access the property
console.log("Name = "+users[2]?.name+", State = "+users[2]?.address?.state)