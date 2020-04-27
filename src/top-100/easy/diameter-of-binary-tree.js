/**
 * Diameter of Binary Tree
 * https://leetcode.com/problems/diameter-of-binary-tree/
 *
 * Given a binary tree, you need to compute the length of the diameter of the tree.
 * The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
 * This path may or may not pass through the root.
 *
 * Example:
 * Given a binary tree
 *
 *        1
 *       / \
 *      2   3
 *    / \
 *   4   5
 *
 *
 * 思路：
 *   1. 经过某节点的最大直径等于其最大左子树高度+最大右子树高度
 *   2. 计算所有节点的最大直径，再取最大值
 *
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const maxH = ({leftH, rightH}) => Math.max(leftH || 0, rightH || 0);

const calcHeight = (node, diameter) => {
    if (!node) return diameter;
    let {left, right} = node;
    diameter = calcHeight(left, diameter);
    node.leftH = left ? maxH(left) + 1 : 0;

    diameter = calcHeight(right, diameter);
    node.rightH = right ? maxH(right) + 1 : 0;

    return Math.max(node.leftH + node.rightH, diameter);
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
const diameterOfBinaryTree = (root) => {
    if (!root) return 0;
    let diameter = 0;
    return calcHeight(root, diameter);
};


module.exports = {
    diameterOfBinaryTree
};
