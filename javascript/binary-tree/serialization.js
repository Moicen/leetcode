/**
 * Serialize and Deserialize Binary Tree
 * https://leetcode.com/explore/learn/card/data-structure-tree/133/conclusion/995/
 *
 */

const run = require("./runner");

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const Tree = {
    val: 1,
    left: {val: 2},
    right: {
        val: 3,
        left: {val: 4},
        right: {val: 5}
    }
};

const rightTree = () => {
    let root = {val: 1}, cur = 2, node = root;
    while (cur <= 1000) {
        node.right = {val: cur};
        node = node.right;
        cur++
    }
    return root;
};
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = (root) => {
    if (!root) return '[]';
    let nodes = [], result = [];
    nodes.push(root);
    while (nodes.length) {
        let children = [];
        nodes.forEach(node => {
            let {left, right, parent = null, val, side = null} = node;
            let id = Math.random().toString(16).replace('.', '');
            result.push({val, parent, side, id});
            if (left) {
                left.parent = id;
                left.side = "left";
                children.push(left);
            }
            if (right) {
                right.parent = id;
                right.side = "right";
                children.push(right);
            }
        });
        nodes = children;
    }
    return JSON.stringify(result);
};


/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */

const deserialize = (data) => {
    let nodes = JSON.parse(data);
    if (nodes.length === 0) return null;
    let {val, id} = nodes.shift(), root = {val, id, left: null, right: null}, parents = [root];
    nodes.forEach(({val, parent, side, id}) => {
        let p = parents.find(x => x.id === parent);
        let node = {val, id, left: null, right: null};
        p[side] = node;
        parents.push(node);
    });
    return root;
};
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

run([
    {desc: 'deserialize binary tree', exec: (tree) => deserialize(serialize(tree))}
]);
