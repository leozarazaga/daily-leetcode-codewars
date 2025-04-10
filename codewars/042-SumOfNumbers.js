/*********************************************************************************************

"Sum of Numbers"

Given two integers a and b, which can be positive or negative,
find the sum of all the integers between and including them and
return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
    (1, 0) --> 1 (1 + 0 = 1)
    (1, 2) --> 3 (1 + 2 = 3)
    (0, 1) --> 1 (0 + 1 = 1)
    (1, 1) --> 1 (1 since both are same)
    (-1, 0) --> -1 (-1 + 0 = -1)
    (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
    
********************************************************************************************/

function getSum(a, b) {
  if (a === b) return a;

  if (a > b) {
    [a, b] = [b, a];
  }

  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
}

console.log(getSum(10, 10));
console.log(getSum(2, 4));
console.log(getSum(5, -1));
console.log(getSum(-298, -373));

// Time: 822ms
