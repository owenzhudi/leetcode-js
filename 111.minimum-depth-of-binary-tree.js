/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
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
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) {
        return 0;
    }
    const left = minDepth(root.left);
    const right = minDepth(root.right);
    if (left !== 0 && right !== 0) {
        return Math.min(left, right) + 1;
    }
    return left === 0 ? right + 1 : left + 1;
};

