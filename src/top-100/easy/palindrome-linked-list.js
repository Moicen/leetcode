/**
 *  Palindrome Linked List
 * https://leetcode.com/problems/palindrome-linked-list/
 *
 * Given a singly linked list, determine if it is a palindrome.
 *
 *   Example 1:
 *
 *       Input: 1->2
 *       Output: false
 *       Example 2:
 *
 *       Input: 1->2->2->1
 *       Output: true
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
 * @return {boolean}
 */
const isPalindrome = function (head) {
    let nodes = [], node = head;
    while (node) {
        nodes.push(node.val);
        node = node.next;
    }
    let length = nodes.length;
    for (let i = 0; i < Math.floor(length / 2); i++) {
        if (nodes[i] !== nodes[length - 1 - i]) {
            return false;
        }
    }
    return true;
};

module.exports = {
    isPalindrome
};
