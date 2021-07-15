// //* SCOPE = Visibility of a VARIABLE in a file

// const someFunction = () => {

//     let name = `Billy bob joe`;               // method  aka LOCAL SCOPE
//     console.log(`${name} called from the function`);
//     }
//     // we need the brackets to actually invoke the function 
//     someFunction();

//     //GLOBAL SCOPE - Visible to everyone / Use it everywhere / Accessible within the whole file
    
//     let hello = `hello world`;

//     someVariableThatDoesntExist = "hi";

//     console.log(someVariableThatDoesntExist);


//     const checkBalance = () => {
//         balance = 10000;
//     }
//     checkBalance();
//     balance = 99999
//         console.log(balance);

let check = false;

const changeCheck = () => {
    check = true;
console.log(check);
changeCheck();
console.log(check);
}

let flag;

const test = () => {
    flag = true;
    console.log(flag);
    test1();
    console.log(flag);
}
const test1 = () => {
    flag = false;
}
test();
console.log("==========")


let x;
const anotherOne = () => {
    x = true;
    console.log(x);
    theNextMethod();
    console.log(x)
    theNextMethod
}

const theNextMethod = () => {
    let x = false;
    return;
    }
anotherOne();

// Always try to use local scopes where possible.If you don't have a local scope 
//to use, use the global Methods in a file cant't READ/SEE Local variables in other Methods.

function submit() {
    let x = "foo";
    if (x = "foo") {
        let y = "boo";
    }
    console.log(x);
    console.log(y);
}
submit();

function qwer() {
    console.log(p);
    console.log(foo);
    let p = 1;
    function foo() {
        return 2;
}
}
qwer();


const checkFoo = () => {
    let x = `foo`;
    if(x =`foo`) {
        let y = `boo`;
    }
    console.log(x);   // lives in the method
    console.log(y);   // it has it's own METHOD/SCOPE /Reference ERROR 
}


const doSomething = () => {
    let k = 1;
    console.log(k);
    const foo = () => {

    }
    function foo() {
        return "whatever";
    }
}
doSomething();



