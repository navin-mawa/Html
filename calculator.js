'use strict'
 
letplusButton = document.querySelector("#plus");
letsubtractButton = document.querySelector("#subtract");
letdivideButton = document.querySelector("#divide");
letmultiplyButton = document.querySelector("#multiply");
letnumber1Field = document.querySelector("#number1");
letnumber2Field = document.querySelector("#number2");
letresultField = document.querySelector("#result");
 
// Plus function
constplusSubmission = (event) => {​​​​​​​​
event.preventDefault(); 
resultField.value = Number(number1Field.value) + Number(number2Field.value);
}​​​​​​​​
 
// Subtract function
constsubtractSubmission = (event) => {​​​​​​​​
event.preventDefault(); 
resultField.value = number1Field.value - number2Field.value;
}​​​​​​​​
 
// Associate functions to buttons
plusButton.addEventListener('click',plusSubmission);
subtractButton.addEventListener('click',subtractSubmission);

