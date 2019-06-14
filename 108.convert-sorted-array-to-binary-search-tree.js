/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

const helper = (nums, left, right) => {
    if (left > right) {
        return null;
    }
    if (left === right) {
        return new TreeNode(nums[left]);
    }
    const mid = Math.floor((left + right) / 2);
    const root = new TreeNode(nums[mid]);
    root.left = helper(nums, left, mid - 1);
    root.right = helper(nums, mid + 1, right);
    return root;
};

var sortedArrayToBST = function(nums) {
    return helper(nums, 0, nums.length - 1);
};

