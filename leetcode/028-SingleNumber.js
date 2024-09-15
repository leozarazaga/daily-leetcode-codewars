/*********************************************************************************************

"Single Number"

Given a non-empty array of integers nums,
every element appears twice except for one.
Find that single one.

You must implement a solution with a linear
runtime complexity and use only constant extra space.

Example 1:
    Input: nums = [2,2,1]
    Output: 1

Example 2:
    Input: nums = [4,1,2,1,2]
    Output: 4

Example 3:
    Input: nums = [1]
    Output: 1

********************************************************************************************/

var singleNumber = function (nums) {

    let obj = {}
    for (let i of nums) {
        (obj[i]) ? obj[i]++ : obj[i] = 1;
    }

    let singleNumber = 0;
    for (let i in obj) {
        if (obj[i] === 1) {
            singleNumber = Number(i)
        }
    }
    return singleNumber;

};

let x = [4, 1, 2, 1, 2];
console.log(singleNumber(x));
//Runtime: 50ms

/********************************************************************************************/