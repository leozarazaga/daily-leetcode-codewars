/*********************************************************************************************

"Write Number in Expanded Form"

You will be given a number and you will need
to return it as a string in Expanded Form.

For example:
    expandedForm(12); // Should return '10 + 2'
    expandedForm(42); // Should return '40 + 2'
    expandedForm(70304); // Should return '70000 + 300 + 4'

********************************************************************************************/

function expandedForm(num) {
    let numToStr = num.toString();
    let length = numToStr.length;
    let result = [];

    for (let i = 0; i < length; i++) {
        let index = numToStr[i]
        if (index !== "0") {
            result.push(index * Math.pow(10, length - i - 1));
        }
    }
    return result.join(" + ")
}

console.log(expandedForm(12));
console.log(expandedForm(70304));


/********************************************************************************************/

//First Approach

/* 
function expandedForm(num) {
    let numbToString = num.toString();
    let length = numbToString.length;

    return numbToString
        .split("")
        .map((number, i) => {
            if (number !== "0") {
                return number * Math.pow(10, length - i - 1)
            }
        })
        .filter(value => value > 0)
        .join(" + ")
}
*/