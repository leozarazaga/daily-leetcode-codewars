/*********************************************************************************************

"String ends with?"

Complete the solution so that it returns true if
the first argument(string) passed in ends with 
the 2nd argument (also a string).

Examples:
    solution('abc', 'bc') // returns true
    solution('abc', 'd') // returns false

********************************************************************************************/

function solution(str, ending) {
    // return str.endsWith(ending)  

    if (ending.length > str.length) {
        return false;
    }

    const lastLettersInString = str.slice(str.length - ending.length);
    return lastLettersInString === ending;
}

console.log(solution('abc', "bc"));
//Time: 752ms

/********************************************************************************************/

//FIRST APPROACH

/* function solution(str, ending) {

    if (ending.length > str.length) {
        return false;
    }

    for (let i = 0; i < ending.length; i++) {
        if (str[str.length - 1 - i] !== ending[ending.length - 1 - i]) {
            return false;
        }
    }
    return true;
} */