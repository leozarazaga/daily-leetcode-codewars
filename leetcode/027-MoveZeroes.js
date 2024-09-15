/*********************************************************************************************

"Move Zeroes"

Given an integer array nums, move all 0's to the
end of it while maintaining the relative order
of the non-zero elements.

Note that you must do this in-place without
making a copy of the array.

Example 1:
    Input: nums = [0,1,0,3,12]
    Output: [1,3,12,0,0]
    
Example 2:
    Input: nums = [0]
    Output: [0]

********************************************************************************************/

var moveZeroes = function (nums) {
    
    let left = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[left]] = [nums[left], nums[i]]
            left++
        }
    }
};


let x = [0, 1, 0, 3, 12];
moveZeroes(x)
console.log(x);
//Runtime: 54ms

/********************************************************************************************/

//FIRST APPROACH

/* var moveZeroes = function (nums) {

    let obj = {}
    for (let i of nums) {
        (obj[i]) ? obj[i]++ : obj[i] = 1;
    }
    console.log(obj);

    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[index] = nums[i]
            index++
        }
    }

    for (let i = index; i < nums.length; i++) {
        nums[i] = 0;
    }
        
}; */