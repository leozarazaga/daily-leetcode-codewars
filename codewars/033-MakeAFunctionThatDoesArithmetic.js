/*********************************************************************************************

"Make a function that does arithmetic"

Given two numbers and an arithmetic operator
(the name of it, as a string), return the result
of the two numbers having that operator used on them.

a and b will both be positive integers, and a will
always be the first number in the operation, and b
always the second.

The four operators are "add", "subtract", "divide", "multiply".

Examples:
    5, 2, "add"      --> 7
    5, 2, "subtract" --> 3
    5, 2, "multiply" --> 10
    5, 2, "divide"   --> 2.5
    
********************************************************************************************/

function arithmetic(a, b, operator) {

    switch (operator) {
        case 'add':
            return a + b

        case 'subtract':
            return a - b

        case 'multiply':
            return a * b

        case 'divide':
            return (b === 0) ? 'You cannot divide by zero' : a / b;

        default:
            return 'Invalid operator!';
    }
}

console.log(arithmetic(8, 2, "divide"));
//Time: 752ms
