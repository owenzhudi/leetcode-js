/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0) {
        return 0;
    }
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            let j = 0;
            let k = i;
            for (j = 0; j < needle.length; j++) {
                if (haystack[k] !== needle[j]) {
                    break;
                }
                k++;
            }
            if (j === needle.length) {
                return i;
            }
        }
    }
    return -1;
};

