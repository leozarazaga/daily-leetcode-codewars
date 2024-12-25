/*********************************************************************************************

"Your order, please"

Your task is to sort a given string. Each word in the
string will contain a single number. This number is
the position the word should have in the result.

Note: Numbers can be from 1 to 9.
So 1 will be the first word (not 0).

If the input string is empty, return an empty string.
The words in the input String will only contain valid
consecutive numbers.

Example:
  "is2 Thi1s T4est 3a"                -->  "Thi1s is2 3a T4est"
  "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
  ""                                  -->  ""
    
********************************************************************************************/

function order(words) {
  if (!words) {
    return "";
  }

  let wordsArray = words.split(" ");
  let result = [];

  for (let word of wordsArray) {
    for (let char of word) {
      if (char >= 1 && char <= 9) {
        result.push({ word: word, num: Number(char) });
        break;
      }
    }
  }
  console.log(result);

  return result
    .sort((a, b) => a.num - b.num)
    .map((item) => item.word)
    .join(" ");
}

console.log(order("is2 Thi1s T4est 3a"));
console.log(order("Fo1r the2 g3ood 4of th5e pe6ople"));
console.log(order(""));
// Time: 743ms

/********************************************************************************************/
