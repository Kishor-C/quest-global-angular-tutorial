var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
})(Gender || (Gender = {}));
;
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 1] = "UP";
    Direction[Direction["DOWN"] = 2] = "DOWN";
    Direction[Direction["LEFT"] = 3] = "LEFT";
    Direction[Direction["RIGHT"] = 4] = "RIGHT";
})(Direction || (Direction = {})); // now its starts from 1
function printGender(gender) {
    console.log("Gender = " + Gender[gender] + " gender = " + gender);
}
// now you can call printGender either by passing MALE/FEMALE
printGender(Gender.MALE);
printGender(Gender.FEMALE);
//printGender("MALE"); error because you can't pass string
console.log("UP: " + Direction.UP); // prints 1
console.log("DOWN: " + Direction.DOWN); // prints 2
