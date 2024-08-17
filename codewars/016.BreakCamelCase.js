/*********************************************************************************************

"Break camelCase"

Complete the solution so that the function will
break up camel casing, using a space between words.

Example
    "camelCasing"  =>  "camel Casing"
    "identifier"   =>  "identifier"
    ""             =>  ""

********************************************************************************************/

function solution(string) {
    return string
        .split("")
        .map((char) => char === char.toUpperCase() ? ' ' + char : char)
        .join("");
}

console.log(solution("camelCasing"));
console.log(solution("identifier"));
console.log(solution(""));
console.log(solution("thisIsATest"));



/********************************************************************************************/

//First Approach

/* 
  function solution(string) {
    let result = "";

    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (char === char.toUpperCase()) {
            result += " " + char
        } else {
            result += char
        }
    }
    return result;
}
*/
