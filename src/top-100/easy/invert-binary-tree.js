/**
 * Invert Binary Tree
 * https://leetcode.com/problems/invert-binary-tree/
 *
 * Invert a binary tree.
 *
 *   Example 1:
 *
 *  Input:
 *
 *         4
 *       /   \
 *      2     7
 *     / \   / \
 *    1   3 6   9
 *  Output:
 *
 *         4
 *       /   \
 *      7     2
 *     / \   / \
 *    9   6 3   1
 */


const recur = (node) => {
    if (!node) return;

    let { left, right } = node;
    node.left = right;
    node.right = left;
    recur(left);
    recur(right);
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function (root) {
    recur(root);
    return root;
};

module.exports = {
    invertTree
};
