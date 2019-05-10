/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (!nums || !nums.length) {
      return 0;
    }
    let slow = 0;
    let fast = 1;
    while (fast < nums.length) {
      if (nums[slow] !== nums[fast]) {
        nums[++slow] = nums[fast];
      }
      fast++;
    }
    return slow + 1;
};

