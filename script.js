`use Strict`

let a = 2;

const b = 1;

var message = "hello";

let aBoolean = true;
let aNumber = 3.2;
let aString = `text`;
let aBigInt = 999999999999n; 
let aBrokenBigInt = 99999999999;
let aSymbol = Symbol(`description in here`);
let aNull = null;
let anUndefined;

console.log(aBigInt);
console.log(aBrokenBigInt);

console.log(anUndefined);
console.log(typeof(anUndefined));

console.log(aNull);
console.log(typeof(aNull));

let myObject = {
    key : `value`,
    anotherKey : 12345
}
    console.log(myObject);

    let string1 = `41 & 12 = `
    let result = 41 * 12;
    console.log(string1 + result);

    let string2 = `41 * 12 = ${41 * 12}`;
    console.log(string2);


    console.log("Naveen");
    console.info("Mawa");
    console.log("India");
    console.log("pieces");

    let myCar = "BMW";
    let myModel = "x6";

    console.log("my fav car is :" + myCar + " and the model is :" + myModel)

console.log("This is now %c the end of the exercise.","color:orange;font-family:fantasy; font-style: Bold; background-color; black;padding; 10px");

let h;
let i = 12345;
let j = 125412;
let k = true;
let l = {a:"JavaScript"};

typeof(h);
typeof(i);
typeof(j);
typeof(k);
typeof(l);
console.log(h);
console.log(i);
console.log(j);
console.log(k);
console.log(l);

let totalMoney = 4000;
let moneypaidSoFar = 2348;
let totalLeftToPay = totalMoney - moneypaidSoFar;

console.log(`The total bill is ${totalMoney} the remaning amount of money to be paid is ${totalLeftToPay}`);

// ASI

// AUTOMATIC SEMI-COLON INSERTION

// JAVASCRIPT AUTOMATICALLY INSERTS Semi COLONS FOR US


let x = 4
console.log(x);

let q = 1;
let z = 1;

q
++
z

console.log(`q = `+ q);
console.log(`z = `+ z);

// ITERATION
// LOOPS
// FOR
// USE A COUNTER
// RUN UNTIL A CONDITION IS MET
for(let v = 0; v < 10; v++){
    console.log(`v = ${v}`);
    }

// WHILE 
 //  works with booleans (true or false)
//  run while the condition is true

let condition = true;
let increment = 0;
while(condition) {
console.log(`increment me`);
    increment ++;
    
    if (increment == 3) {
        condition = false;
    }
    }


// DO WHILE
 let w = false;
 do {
     console.log(`run forest run`);

 } while(w);

// SWITCH CASES

// run until a BREAT or Return

// can be more effective than large if-else statements

let num = 1;
switch(num) {
    case 0:
        console.log(`zero is zero`);
        break;
        case 1:
        console.log(`we are at one`);
        break;
        case 2:

        console.log(`we are two`);
        break;
}

let n = 10;
while (n<=20) {
    n++;
    console.log(`n = ${n}`);
}

let m = 10;
while (m <= 30){
if (m % 2 == 0) {
    console.log("hi");
    } else {
        console.log("namaste");
    }
    m ++;
}
for (let t = 0; t < 10; t++ ) {
    for (let r = 1; r <=10; r++) {
        console.log(r);

    }
}

for (let u = 1; u<= 10; u++) {
   console.log(`u = ${u}`);
}

let now = new Date();
let day = now.getDay();
switch (day) {
    case 0:
        console.log(`it is a sunday`);
        break;
        console.log(`it is a sat`);
        break;
        console.log(`it is a mon`);
        break;
        console.log(`it is a tue`);
        break;
        console.log(`it is a wed`);
        break;
        console.log(`it is a thr`);
        break;
        console.log(`it is a fri`);
        break;
        default:
            console.log(`Excuse me?`);
            console.log(`it is a sunday`);
            console.log(`it is a sat`)
            console.log(`it is a mon`)
            console.log(`it is a tue`)
            console.log(`it is a wed`);
            console.log(`it is a thr`)
            console.log(`it is a fri`)

            break;
}


// while loop

// let o = 2;
// while( o <= 6 ) {
//     console.log(o + 1);
//     o = o + 2;

//}

for (o = 2; o <= 6; o = o + 2) {
    console.log(o+1);
}

// Conditionals
// TRUTHY  and FALSEY
//  false - false
// 0 - zero
// `` - empty string
// undefined
// null - empty
//Nan - not a number

// everthing is TRUTHY
// IF ( ELSE AND ELSE IF)
// CHECK A CONDITION
// RUN A CODE BLOCK IF IT IS MET

let p = 0;

if (p==0){
    console.log(`sunshine`);
} else if (p !=2) {
    console.log(`moonlight`);
} else {
    console.log(`boogie`);
}

// EQUALITY and TYPE

// TYPE IS MUTABLE
// We can compare different data types with the same value

1 == `1` ? console.log(true) : console.log(false);

//  java script is multating the TYPE so that ONE equals ONE
// it is only checking the VALUE

// STRICTLY EQUAL OPERATOR
// ===
// CHECKS  THE TYPE AND THE VALUE

1 === `1` ? console.log(true) : console.log(false);

let strictA = true;
let strictB = 1;
console.log(strictA == strictB); // true
console.log(strictA===strictB);  // FALSE

console.log(strictA != strictB);  // FALSE
console.log(strictA !== strictB); // TRUE

let age = 22;

if (age>= 18 && age <=65) {
    console.log("Age is in range");
} else if (age < 18) {
    console.log("Underage");
}else {
    console.log("Catch all else");
}
// OBJECTS ARRAYS, JSON

//OBJECTS
// collection of data in any order
//  made up of KEY : VALUE pairs

let animal = new Object();
animal[`name`] = `clifford` ;
animal[`type`] = `dog` ;
animal[`size`] = `big` ;
console.log(animal);
console.log(animal.size);

animal.color = `red` ;
console.log(animal.color);


let vehicle = {
    "type" : `bike`,
    "seats" : 1,
    "wheels" : 2
}
console.log(vehicle);


let garage = [
vehicle,
{"type": `car`, "seats": 5, "wheels": 4}

]

console.log(garage);








