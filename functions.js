//`use strict`; // works more cleanly/ prevents mistakes

// Functions are methods -they do something

// Required : An output
// Required : A Name
// Optional : Parameters

// Function Declaration -HOITS

add(3,4);
function add(a , b){
    console.log(a + b);
}


//! Function Expression
const addition = function(){
    console.log(a+b);
}

//! Arrow function
//? SYNTAX : CONST namefunction  = (params) => { body }

const secondAddition = (a,b) => {
    //Method body
    console.log(a + b);
} 
//! one line Arrow function
const subtraction = (a,b) => console.log(a-b);

function subtract(num1, num2) {
    return num1 - num2;
    }
console.log(subtract (10 , 5));

    
// function declaration
function add(num1, num2) {
    return num1 + num2;
    console.log(add (50 , 60));
}
function subtract(num3, num4) {
    return console.log(num3 - num4);
    }
subtract(20,3);


// FUNCTION EXPRESSION

const sub = function(num3, num4) {
    return console.log(num3 - num4);
}
sub(50,60);

// ARROW Function

const subtract3 = (num6, num7) => {
    return console.log(num6 - num7);
    }
subtract3(17,3);

// Create a function expression called welcome that take in name, age,gender as a parameters. The outcome should be like so:
// e.g. "My name is Felix Cited, i am 20 years old and of gender Male"

const welcome = function (name,age,gender) {
    return console.log(`My Name is ${name} i am ${age} and of gender ${gender}`);
}
welcome(`Felix Cited`,20,`Male`);
welcome(`NAVIN MAWA`, 38, `MALE`)
welcome(`JENNY MAWA`, 2, `FEMALE`)


//arrow function

const powerUp = (n1,n2) => {
    const value = Math.pow(n1,n2);
    return console.log(`PowerUp${n1}= ${ value}`);
}
powerUp(3,3);
powerUp (12,2)



