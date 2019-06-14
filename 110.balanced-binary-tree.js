/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const height = (root) => {
    if (!root) {
        return 0;
    }
    const left = height(root.left);
    const right = height(root.right);
    if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
        return -1;
    }
    return Math.max(left, right) + 1;
};

var isBalanced = function(root) {
    return height(root) !== -1;
};

