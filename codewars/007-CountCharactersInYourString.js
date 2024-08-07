/*********************************************************************************************

"Count characters in your string"

The main idea is to count all the occurring characters in a string.
If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

********************************************************************************************/

function count(string) {
    let count = {};
    string.split("").forEach((s) => count[s] = (count[s] || 0) + 1);
    return count;
}

console.log(count("Helloo"));


/********************************************************************************************/

//First Approach

/* function count(string) {
    let map = new Map();

    for (let i = 0; i < string.length; i++) {
        let character = string[i];

        if (map.has(character)) {
            map.set(character, map.get(character) + 1);
        } else {
            map.set(character, 1)
        }
    }

    let result = {};
    for (let [key, value] of map.entries()) {
        result[key] = value;
    }
    return result;
} */