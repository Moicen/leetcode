/**
 *  Path Sum III
 * https://leetcode.com/problems/path-sum-iii/
 *
 * You are given a binary tree in which each node contains an integer value.
 * Find the number of paths that sum to a given value.
 * The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).
 * The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.
 *
 *   Example:
 *
 *       root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8
 *
 *       10
 *       /  \
 *      5   -3
 *     / \    \
 *    3   2   11
 *   / \   \
 *  3  -2   1
 *
 *       Return 3. The paths that sum to 8 are:
 *
 *       1.  5 -> 3
 *       2.  5 -> 2 -> 1
 *       3. -3 -> 11
 *
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 *
 * 思路：
 * 1. 要计算所有和为指定数的路径，则必须要穷举
 * 2. 对树的节点做穷举，则必然要递归
 *   2.1. 从根结点开始，可以递归计算出每条从上往下的路径和，但这样会遗漏掉从非根结点开始的路径
 *   2.2. 要加上从非根结点开始的路径，则还需一层递归，对每个节点都进行上一步的递归计算
 * 3. 两层递归其中绝大部分计算是重复的，时间复杂度和空间复杂的都无法接受，所以必须使用缓存，保存已计算数据，减少计算量
 *   3.1. 从根结点开始递归到某个子节点时，这条路径上从root到当前节点的中间任意路径和都已计算过，可以保存起来
 *   3.2. 递归到每一个节点时，先求取到当前节点的路径和，再减去指定的sum值，得到一个差值
 *   3.3. 从缓存中寻找这个差值，如果存在，则说明此前路径中存在符合条件的路径，计数+1
 *   3.4. 递归到叶子节点时，开始往回溯，将缓存中到该节点的和清掉，防止影响到另一分支数据的计算
 * 4. 例上面题目中的树，指定和为8，初始设置缓存为{0, 1}，用来处理从根结点到某子节点完整路径和正好等于sum的情况
 *   4.1. 第一次计算，根节点10，路径和为10，差值为10-8=2，缓存为{0: 1}，无命中
 *   4.2. 第二次计算，左边子节点5，路径和为15，差值为15-8=7，缓存为{0: 1, 10: 1}，无命中
 *   4.3. 第三次计算，左边子节点3，路径和为18，差值为18-8=10，缓存为{0: 1, 10: 1, 15: 1}，命中根结点处计算的和
 *     4.3.1. 缓存命中，则说明10-5-3这条路径上，存在某一段路径的和正好等于sum值，
 *     4.3.2. 因为所以路径和计算都是连续节点计算的，所以有 s1 - s0 = s2; s2 + x = s1; 则 x == s0;
 *
 */


const calc = (node, subtotal, sum, cache) => {
    if (!node) return 0;
    let { left, right, val } = node;

    subtotal += val;
    let count = cache.get(subtotal - sum) || 0;

    cache.set(subtotal, (cache.get(subtotal) || 0) + 1);

    count += calc(left, subtotal, sum, cache);
    count += calc(right, subtotal, sum, cache);
    cache.set(subtotal, cache.get(subtotal) - 1);
    return count;
};


/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
const pathSum = function (root, sum) {
    const cache = new Map();
    cache.set(0, 1);
    return calc(root, 0, sum, cache);
};


module.exports = {
    pathSum
};
