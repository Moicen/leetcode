/**
 * Intersection of Two Linked Lists
 * https://leetcode.com/problems/intersection-of-two-linked-lists/
 *
 * Write a program to find the node at which the intersection of two singly linked lists begins.
 *
 * Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
 *   Output: Reference of the node with value = 8
 *  Input Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect). From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,0,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.
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

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = (headA, headB) => {
    let nodeA = headA, nodeB = headB;
    while (nodeA) {
        while (nodeB) {
            if (nodeA === nodeB) return nodeB;
            nodeB = nodeB.next;
        }
        nodeA = nodeA.next;
        nodeB = headB;
    }
    return null;
};
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNodeInReverse = (headA, headB) => {
    let tailA = headA, tailB = headB;
    while (tailA && tailA.next) {
        tailA = tailA.next;
    }
    while (tailB && tailB.next) {
        tailB = tailB.next;
    }

    if (tailA !== tailB) return null;


};

module.exports = {
    getIntersectionNode
};
