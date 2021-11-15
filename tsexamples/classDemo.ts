class Emp {
    private readonly id : number;
    private name : string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    // getter methods for id & name
    public getId() : number { 
        return this.id;
    }
    public getName() : string { 
        return this.name;
    }
    // public setId(id : number) { 
    //     this.id = id; // Gives Error, because id is readonly
    // }
    public setName(name : string) : void {
        this.name = name;
    }
}
let e : Emp = new Emp(100, "Raj");
console.log(e.getId(), e.getName());
e.setName("Rajesh");
console.log(e.getId(), e.getName());