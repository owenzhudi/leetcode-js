/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    if (!nums || !nums.length) {
      return 0;
    }
    const set = new Set();
    for (let n of nums) {
      if (set.has(n)) {
        return n;
      }
      set.add(n);
    }
    return -1;
};

