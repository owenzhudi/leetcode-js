/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if (!nums || !nums.length) {
      return;
    }
    let slow = 0;
    let fast = 0;
    while (fast < nums.length) {
      if (nums[fast] !== 0) {
        nums[slow++] = nums[fast];
      }
      fast++;
    }
    while (slow < nums.length) {
      nums[slow++] = 0;
    }
};

