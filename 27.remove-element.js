/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if (!nums || !nums.length) {
      return 0;
    }
    let slow = 0;
    for (let fast = 0; fast < nums.length; fast++) {
      if (nums[fast] !== val) {
        nums[slow] = nums[fast];
        slow++;
      }
    }
    return slow;
};

