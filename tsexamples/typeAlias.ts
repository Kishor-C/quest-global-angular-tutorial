// creating a type
type Point = {x : number, y : number};

// this function can take only an object of Point type
function printCoordinates(pt : Point) { 
    console.log("x at: "+pt.x+", y at : "+pt.y);
}
// calling the function by passing object of type Point
printCoordinates({x: 0, y: 2});