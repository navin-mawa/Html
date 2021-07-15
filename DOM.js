`use strict`

// the select the img element

// # = ID

// modifying existing 

let logo = document.querySelector("#logo");
logo.setAttribute("width", "7900");

console.dir(logo);

// Create new HTML ELEMENTS

let newHeading = document.createElement("h1");
let text = document.createTextNode("We Love JavaScript");

newHeading.appendChild(text);

// Grab the DIV from the HTML

let divAddToMe = document.querySelector("#addToMe");
divAddToMe.appendChild(newHeading);
















