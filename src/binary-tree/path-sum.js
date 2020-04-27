/**
 * Path Sum
 * https://leetcode.com/explore/learn/card/data-structure-tree/17/solve-problems-recursively/537/
 *
 */

const run = require('./runner');

/**
 * 求二叉树是否存在从根到叶的路径，使得路径上的各点之和为指定的数字
 * 注意，各点数字可能是正数负数和0，需要计算到叶子节点
 * 循环思路：寻找所有从根到叶的路径，从中找和为给定值的那一条
 */

const tree = {
    left: { val: -2, left: { val: 1, left: { val: -1 } }, right: { val: 3 } },
    right: { val: 3, left: { val: -2 } },
    val: 1
};

const recur = (node, sum) => {
    if (!node) return false;
    let { left, right, val } = node;
    let difference = sum - val;
    if (difference === 0 && !left && !right) {
        return true;
    }
    return recur(left, difference) || recur(right, difference);
};


let sum = Math.floor(Math.random() * 30);
const recurWalk = (tree) => {
    // let sum = Math.floor(Math.random() * 30);
    // let sum = -1;
    console.log("tree: ", tree);
    console.log('sum: ', sum);
    return recur(tree, sum);
};

const iterate = (root, sum) => {
    if (!root) return false;
    const stack = [], tried = [];
    let node = root;
    while (node) {
        stack.push(node);
        if (!tried.includes(node)) {
            tried.push(node);
        }
        let { left, right } = node;

        if (left && !tried.includes(left)) {
            node = left;
            continue;
        }
        if (right && !tried.includes(right)) {
            node = right;
            continue;
        }

        if (!left && !right) {
            if (stack.reduce((a, c) => ({ val: a.val + c.val })).val === sum) {
                return true;
            }
        }
        //第一次pop把当前节点pop出去
        stack.pop();
        //第二次把父节点pop出去，因为下次循环一开始会立刻再把这个节点push进去
        node = stack.pop();
    }
    return false;
};

const iterateWalk = (tree) => {
    // let sum = Math.floor(Math.random() * 30);
    console.log("tree: ", tree);
    console.log('sum: ', sum);
    return iterate(tree, sum);
};

module.exports = {
    recur, iterate
};


