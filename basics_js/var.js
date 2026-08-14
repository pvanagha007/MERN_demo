//3 ways of defining a variable in JavaScript

//1. var
var name = "John";
console.log(name); // Output: John

//2. let
let age = 30;
console.log(age); // Output: 30

//3. const
const country = "USA";
console.log(country); // Output: USA


function demovar() {
    var x = 10;
    console.log("Value of x before block:", x);
    if (true) {
        var x = 20; // Same variable!
        console.log("Value of x inside block:", x); 
    }
    console.log("Value of x outside block:", x); 
}
demovar(); 
