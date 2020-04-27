/**
 * Merge Two Binary Trees
 * https://leetcode.com/problems/merge-two-binary-trees/
 *
 * Given two binary trees and imagine that when you put one of them to cover the other,
 * some nodes of the two trees are overlapped while the others are not.
 *
 * You need to merge them into a new binary tree. The merge rule is that if two nodes overlap,
 * then sum node values up as the new value of the merged node.
 * Otherwise, the NOT null node will be used as the node of new tree.
 *
 * Example 1:
 *  Input:
 *       Tree 1                     Tree 2
 *        1                         2
 *       / \                       / \
 *      3   2                     1   3
 *     /                           \   \
 *    5                             4   7
 *  Output:
 *  Merged tree:
 *        3
 *       / \
 *      4   5
 *     / \   \
 *    5   4   7
 *
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const merge = (n1, n2) => {
    if (!n1 && !n2) return null;
    let t = { val: 0, left: null, right: null }, l1, l2, r1, r2;
    if (n1) {
        l1 = n1.left;
        r1 = n1.right;
        t.val += n1.val;
    }
    if (n2) {
        l2 = n2.left;
        r2 = n2.right;
        t.val += n2.val;
    }
    t.left = merge(l1, l2);
    t.right = merge(r1, r2);
    return t;
};

/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
const mergeTrees = (t1, t2) => {
    return merge(t1, t2);
};


module.exports = {
    mergeTrees
};
