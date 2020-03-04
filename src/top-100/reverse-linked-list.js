/**
 * Reverse Linked List
 * https://leetcode.com/problems/reverse-linked-list/
 *
 * Reverse a singly linked list.
 *
 * Example:
 *
 *  Input: 1->2->3->4->5->NULL
 *  Output: 5->4->3->2->1->NULL
 *  Follow up:
 *
 *      A linked list can be reversed either iteratively or recursively. Could you implement both?
 */


const recur = (node, prev) => {
    if (node === null) return prev;
    let next = node.next;
    node.next = prev;
    return recur(next, node);
};

const iterate = (head) => {
    let nodes = [], node = head;
    while (node) {
        let tmp = node.next;
        node.next = null;
        nodes.push(node);
        node = tmp;
    }
    node = null;
    while (nodes.length) {
        let tmp = nodes.shift();
        tmp.next = node;
        node = tmp;
    }
    return node;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
    return recur(head, null);
};


module.exports = {
    recur: (head) => recur(head, null),
    iterate
}
