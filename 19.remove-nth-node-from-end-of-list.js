/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let tail = dummy;
    for (let i = 0; i < n + 1; i++) {
        tail = tail.next;
    }
    let cur = dummy;
    while (tail !== null) {
        tail = tail.next;
        cur = cur.next;
    }
    cur.next = cur.next.next;
    return dummy.next;
};

