/*********************************************************************************************

"Length of Last Word"

Given a string s consisting of words and spaces,
return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

Example 1:
    Input: s = "Hello World"
    Output: 5
    Explanation: The last word is "World" with length 5.

Example 2:
    Input: s = "   fly me   to   the moon  "
    Output: 4
    Explanation: The last word is "moon" with length 4.

Example 3:
    Input: s = "luffy is still joyboy"
    Output: 6
    Explanation: The last word is "joyboy" with length 6.

********************************************************************************************/

var lengthOfLastWord = function (s) {
    let trimedString = s.trim().split(" ");
    return trimedString.splice(-1)[0].length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  ")); 
//Runtime: 61 ms

/********************************************************************************************/

//FIRST APPROACH

/* var lengthOfLastWord = function (s) {
    let trimedString = s.trim();
    let count = 0;
    let foundWord = false;

    for (let i = trimedString.length - 1; i >= 0; i--) {
        if (trimedString[i] !== " ") {
            count++;
            foundWord = true;
        } else if (foundWord) {
            break;
        }
    }
    return count;
};

console.log(lengthOfLastWord("Hello World"));   */