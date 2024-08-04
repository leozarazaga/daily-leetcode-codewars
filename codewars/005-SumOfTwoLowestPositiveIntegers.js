/*********************************************************************************************
  
"Sum of two lowest positive integers"

Create a function that returns the sum of the two lowest positive
numbers given an array of minimum 4 positive integers.
No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
    
********************************************************************************************/

function sumTwoSmallestNumbers(numbers) {
    return numbers.sort((a, b) => a - b).slice(0, 2).reduce((acc, curr) => acc + curr)
}

let numbers = [10, 343445353, 3453445, 3453545353453]
console.log(sumTwoSmallestNumbers(numbers));


/********************************************************************************************/

//My First Implementation

/* 
function sumTwoSmallestNumbers(numbers) {
    let lowest = Infinity;
    let secondLowest = Infinity;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < lowest) {
            secondLowest = lowest;
            lowest = numbers[i]
        } else if (numbers[i] < secondLowest && numbers[i] !== lowest) {
            secondLowest = numbers[i]
        }
    }
    console.log("Lowest: ", lowest);
    console.log("Second lowest:", secondLowest);

    return lowest + secondLowest;
}


let numbers = [10, 343445353, 3453445, 3453545353453]
console.log(sumTwoSmallestNumbers(numbers));
*/
