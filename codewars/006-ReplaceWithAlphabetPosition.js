/*********************************************************************************************

"Replace With Alphabet Position"

In this kata you are required to, given a string,
replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.


Example
    Input = "The sunset sets at twelve o' clock."
    Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"


********************************************************************************************/


function alphabetPosition(text) {
    text = text.toLowerCase();

    let letters = text.match(/[a-z]/g);
    if (letters === null) return "";

    return letters.map((char) => char.charCodeAt(0) - "a".charCodeAt(0) + 1).join(" ");
}

let input = "The sunset sets at twelve o' clock."
console.log(alphabetPosition(input));



/********************************************************************************************/

//My First Implementation

/* 
function alphabetPosition(text) {
    text = text.toLowerCase();
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    let positions = [];

    for (let char of text) {
        let index = alphabet.indexOf(char);
        if (index !== -1) {
            positions.push(index + 1);
            console.log(char, index + 1);
        }
    }

    return positions.join(" ");
}

let input = "The sunset sets at twelve o' clock."
console.log(alphabetPosition(input)); 
*/

