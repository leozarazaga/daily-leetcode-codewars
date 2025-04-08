/*********************************************************************************************

"Exes and Ohs"

Check to see if a string has the same amount of 'x's and 'o's.
The method must return a boolean and be case insensitive.
The string can contain any char.

Examples input/output:
    XO("ooxx") => true
    XO("xooxx") => false
    XO("ooxXm") => true
    XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
    XO("zzoo") => false
    
********************************************************************************************/

function XO(str) {
    let obj = {};

    let newStr = str.toLowerCase().split("");

    for (let i of newStr) {
        obj[i] = obj[i] ? obj[i] + 1 : 1;
    }

    if (!obj["x"] && !obj["o"]) {
        return true;
    }

    return obj["x"] === obj["o"];
}

console.log(XO("xoxo"));
console.log(XO("xooxx"));
console.log(XO("ooxXm"));
console.log(XO("zpzpzpp"));
console.log(XO("zzoo"));

// Time: 866ms

/********************************************************************************************/

// ANOTHER APPROACH

/* 
function XO(str) {
    str = str.toLowerCase().split("");
    return str.filter((x) => x === "x").length === str.filter((x) => x === "o").length;
}
 */
