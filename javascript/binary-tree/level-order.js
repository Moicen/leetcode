/**
 * Binary Tree Level Order Traversal
 * https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/931/
 *
 */

const run = require('./runner');

/**
 * 二叉树层序遍历（广度优先）
 * 层序：从上到下每一层从左到右
 */


const recur = (nodes, result) => {
    if (nodes.length === 0) return;
    result.push(nodes.map(x => x.val));
    let children = [];
    nodes.forEach(node => {
        let {left, right} = node;
        if (left) children.push(left);
        if (right) children.push(right);
    });
    recur(children, result)
};

const iterate = (root) => {
    let parent = [], current = [], result = [];
    if (!root) return result;
    parent.push(root);
    result.push(parent.map(x => x.val));
    while (parent.length) {
        parent.forEach(node => {
            let {left, right} = node;
            if (left) current.push(left);
            if (right) current.push(right);
        });
        if (current.length > 0) {
            result.push(current.map(x => x.val));
        }
        parent = current;
        current = [];
    }
    return result;
};

const recurWalk = tree => {
    const result = [];
    if (tree) {
        recur([tree], result);
    }
    return result;
};

const iterateWalk = tree => {
    return iterate(tree);
};


run([
    {desc: 'Level order with recur', exec: recurWalk},
    {desc: 'Level order with iterate', exec: iterateWalk}
]);
