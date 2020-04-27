/**
 * Remove Nth Node From End of List
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 *
 * Given a linked list, remove the n-th node from the end of list and return its head.
 *
 *
 * Example:
 *
 *  Given linked list: 1->2->3->4->5, and n = 2.
 *  After removing the second node from the end, the linked list becomes 1->2->3->5.
 *
 * Note:
 *
 *  Given n will always be valid.
 *
 * Follow up:
 *
 *  Could you do this in one pass?
 *
 * 思路：
 *      定义一个数组，对链表循环，将所有node放到数组里
 *      找出要删除的节点索引，删除节点，将剩余的元素链接起来
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
const removeNthFromEnd = function (head, n) {
    let nodes = [], node = head;
    while (node) {
        nodes.push(node);
        node = node.next;
    }
    let removedIndex = nodes.length - n;
    nodes.splice(removedIndex, 1);
    let prev = nodes[removedIndex - 1];
    if (prev) prev.next = nodes[removedIndex] || null;
    return nodes[0] || null;
};


module.exports = {
    removeNthFromEnd
};
