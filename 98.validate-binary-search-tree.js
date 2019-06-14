/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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

const helper = (node, lower, upper) => {
    if (!node) {
        return true;
    }
    const val = node.val;
    if (val <= lower || val >= upper) {
        return false;
    }
    if (!helper(node.left, lower, val) || !helper(node.right, val, upper)) {
        return false;
    }
    return true;
};

var isValidBST = function(root) {
    return helper(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
};

