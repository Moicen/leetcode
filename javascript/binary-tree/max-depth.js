/**
 * Maximum Depth of Binary Tree
 * https://leetcode.com/explore/learn/card/data-structure-tree/17/solve-problems-recursively/535/
 *
 */

const run = require('./runner');

const b2t = (node, depth) => {
    if (!node) return depth;
    depth += 1;
    let {left, right} = node;
    return Math.max(b2t(left, depth), b2t(right, depth));
};

class T2b {
    constructor(tree) {
        this.tree = tree;
        this.answer = 0;
    }

    walk(node, depth) {
        if (!node) return;
        let {left, right} = node;
        if (!left && !right) {
            this.answer = Math.max(depth, this.answer)
        }
        this.walk(left, depth + 1);
        this.walk(right, depth + 1);
    }

    result() {
        if (this.tree) {
            this.walk(this.tree, 1);
        }
        return this.answer;
    }
}


const t2bWalk = (tree) => {
    let t2b = new T2b(tree);
    return t2b.result();
};

const b2tWalk = (tree) => {
    return b2t(tree, 0);
};

run([
    {desc: 'Max depth with top-bottom', exec: t2bWalk},
    {desc: 'Max depth with bottom-top', exec: b2tWalk}
]);
