/*********************************************************************************************
  
"Reverse Words"

Complete the function that accepts a string parameter, and reverses each word in the string.
All spaces in the string should be retained.

Examples:
    "This is an example!" ==> "sihT si na !elpmaxe"
    "double  spaces"      ==> "elbuod  secaps"

********************************************************************************************/


function reverseWords(str) {
    let array = [];
    let currentWord = "";

    for (let char of str) {
        if (char === " ") {
            if (currentWord.length > 0) {
                array.push(currentWord.split("").reverse().join(""));
                currentWord = "";
            }
            array.push(" ")
        } else {
            currentWord += char;
        }
    }

    if (currentWord.length > 0) {
        array.push(currentWord.split("").reverse().join(""));
    }
    return array.join("");
}  

console.log(reverseWords("sihT si na !elpmaxe"));
console.log(reverseWords("elbuod  secaps"));




/* 
**My Old Implementation**

function reverseWords(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
}
*/
