/**
 * Add Two Numbers
 * https://leetcode.com/problems/add-two-numbers/
 *
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 *   Example:
 *
 *   Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 *   Output: 7 -> 0 -> 8
 *   Explanation: 342 + 465 = 807.
 *
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

const assemble = (node) => {
    let result = [];
    while (node) {
        result.push(node.val);
        node = node.next;
    }
    return result;
};

/**
 * @param {[number]} digits
 * @return {ListNode}
 */
const split = (digits) => {
    let root = {val: digits.shift(), next: null};
    let node = root;
    while (digits.length > 0) {
        node.next = {
            val: digits.shift(),
            next: null
        };
        node = node.next;
    }
    return root;
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
    let first = assemble(l1), second = assemble(l2);
    let result = [], carry = 0;
    for (let i = 0; i < Math.max(first.length, second.length); i++) {
        let sum = (first[i] || 0) + (second[i] || 0);
        sum += carry;
        if (sum >= 10) {
            sum -= 10;
            carry = 1;
        } else carry = 0;
        result[i] = sum;
    }
    if (carry) result.push(1);
    return split(result);
};

module.exports = {
    addTwoNumbers
};
