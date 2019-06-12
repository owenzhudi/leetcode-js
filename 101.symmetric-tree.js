/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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

const helper = (left, right) => {
    if (!left && !right) {
        return true;
    }
    if (!left || !right) {
        return false;
    }
    if (left.val !== right.val) {
        return false;
    }
    return helper(left.left, right.right) && helper(left.right, right.left);
};

var isSymmetric = function(root) {
    if (!root) {
        return true;
    }
    return helper(root.left, root.right);
};

