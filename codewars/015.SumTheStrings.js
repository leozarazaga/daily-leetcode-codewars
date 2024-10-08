/*********************************************************************************************

"Sum The Strings"

Create a function that takes 2 integers in form of a string
as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 --> Output)
    "4",  "5" --> "9"
    "34", "5" --> "39"
    "", "" --> "0"
    "2", "" --> "2"
    "-5", "3" --> "-2"

********************************************************************************************/

function sumStr(a, b) {
    return String(Number(a) + Number(b));
}

console.log(sumStr("4", "5"));
console.log(sumStr("34", "5"));
console.log(sumStr("", ""));

/********************************************************************************************/

//First Approach

/* 
function sumStr(a, b) {
    let num1 = parseInt(a || '0');
    let num2 = parseInt(b || '0');
    return (num1 + num2).toString();
}
*/

