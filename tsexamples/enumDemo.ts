enum Gender { MALE, FEMALE};
enum Direction {UP = 1, DOWN, LEFT, RIGHT } // now its starts from 1
function printGender(gender : Gender) {
    console.log("Gender = "+Gender[gender]+" gender = "+gender);
}
// now you can call printGender either by passing MALE/FEMALE
printGender(Gender.MALE);
printGender(Gender.FEMALE);
//printGender("MALE"); error because you can't pass string

console.log("UP: "+Direction.UP); // prints 1
console.log("DOWN: "+Direction.DOWN); // prints 2

