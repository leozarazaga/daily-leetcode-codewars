/*********************************************************************************************

"Counting Duplicates"

Write a function that will return the count of
distinct case-insensitive alphabetic characters
and numeric digits that occur more than once in
the input string. The input string can be assumed
to contain only alphabets (both uppercase and lowercase)
and numeric digits.


Example
    "abcde" -> 0 # no characters repeats more than once
    "aabbcde" -> 2 # 'a' and 'b'
    "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
    "indivisibility" -> 1 # 'i' occurs six times
    "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
    "aA11" -> 2 # 'a' and '1'
    "ABBA" -> 2 # 'A' and 'B' each occur twice

********************************************************************************************/

function duplicateCount(text) {
    let count = text.toLowerCase().split("").reduce((acc, i) => {
        (acc[i]) ? acc[i] += 1 : acc[i] = 1;
        return acc;
    }, {})
    return Object.keys(count).filter((key) => count[key] > 1).length;
}

console.log(duplicateCount("indivisibility"));
console.log(duplicateCount("ABBA"));
//Time: 801ms 

/********************************************************************************************/

//FIRST APPROACH

/* function duplicateCount(text) {
    let object = {}
    let lowerText = text.toLowerCase();

    for (let i of lowerText) {
        if (object[i]) {
            object[i]++;
        } else {
            object[i] = 1;
        }
    }

    let counter = 0;
    for (let i in object) {
        if (object[i] > 1) counter++;
    }

    console.log(object);
    return counter;
} */