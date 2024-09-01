/*********************************************************************************************

"Contains Duplicate II"

Given an integer array nums and an integer k, return true
if there are two distinct indices i and j in the array such
that nums[i] == nums[j] and abs(i - j) <= k.

Example 1:
    Input: nums = [1,2,3,1], k = 3
    Output: true

Example 2:
    Input: nums = [1,0,1,1], k = 1
    Output: true

Example 3:
    Input: nums = [1,2,3,1,2,3], k = 2
    Output: false


********************************************************************************************/

var containsNearbyDuplicate = function (nums, k) {

    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (i - map.get(nums[i]) <= k) {
            return true;
        }
        map.set(nums[i], i)
    }
    return false;

};


console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); 
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
//Runtime: 60ms

