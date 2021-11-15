class A {
    private x : number = 100;
    protected y : number = 200;
    public z : number = 300;
}
class B extends A {
    printValues() : void {
        console.log("y = "+this.y+", z = "+this.z);
    }
}
class C  {
    printAgain() {
        let obj : B = new B();
        console.log("obj.z = "+obj.z);
        // console.log("obj.y = "+obj.y);
        // since y is protected & C is not a subclass of A its an error
    }
}