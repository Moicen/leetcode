/**
 * Lowest Common Ancestor of a Binary Tree
 * https://leetcode.com/explore/learn/card/data-structure-tree/133/conclusion/932/
 *
 */

const run = require("./runner");

const Tree = {
    val: 3,
    left: {
        val: 5,
        left: {val: 6},
        right: {val: 2, left: {val: 7}, right: {val: 4}},
    },
    right: {
        val: 1, left: {val: 0}, right: {val: 8}
    }
};


const prepare = (nodes, p, q) => {
    if (nodes.length === 0) return {};
    let children = [];
    nodes.forEach(node => {
        let {left, right, parent, val} = node;
        if (p.val === val) p = node;
        if (q.val === val) q = node;
        node.depth = parent ? parent.depth + 1 : 1;
        if (left) {
            left.parent = node;
            children.push(left);
        }
        if (right) {
            right.parent = node;
            children.push(right);
        }
    });
    let {x, y} = prepare(children, p, q);

    return {x: x || p, y: y || q};
};

const find = (p, q) => {
    while (p.depth !== q.depth) {

        if (p.depth > q.depth) {
            p = p.parent;
        } else {
            q = q.parent;
        }
    }
    while (p && q && p.val !== q.val) {
        p = p.parent;
        q = q.parent;
    }
    return p && q ? p : null;
};

const clean = (node) => {
    if (node) {
        delete node.parent;
        delete node.depth;
        clean(node.left);
        clean(node.right);
    }
}

const lca = (tree, p, q) => {
    if (!tree) return null;
    p = {val: p}, q = {val: q};
    let {x, y} = prepare([tree], p, q);
    let node = find(x, y);
    clean(node);
    return node;
};

module.exports = {
    lca
};
