class Test {
    x = 10;
    static y = 20;
    static demo() {
        console.log("demo() is static")
    }
}
let t1 = new Test();
t1.x = 25;
let t2 = new Test();
t2.x = 35;
console.log("t1.x = "+t1.x);
console.log("t2.x = "+t2.x);
// you should access static members using class name
Test.demo();
console.log("static y = "+Test.y);