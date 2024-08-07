/*********************************************************************************************

"Detect Pangram"

A pangram is a sentence that contains every single letter of the alphabetat least once.
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram.
Return True if it is, False if not. Ignore numbers and punctuation.

********************************************************************************************/

function isPangram(string) {
    string = string.toLowerCase();

    return "abcdefghijklmnopqrstuvwxyz".split("").every(((s) => string.indexOf(s) !== -1));
}


let text = "The quick brown fox jumps over the lazy dog."
let test = "This test will return false"
console.log(isPangram(text));
console.log(isPangram(test));

/********************************************************************************************/


//First Approach

/* function isPangram(string) {
    let lowerText = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (let letter of alphabet) {
        if (!lowerText.includes(letter)) {
            return false;
        }
    }
    return true;
} */