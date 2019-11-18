const run = require('./runner');

const recur = (node, result) => {
    if (!node) return;
    result.push(node.val);
    if (node.left) {
        recur(node.left, result);
    }
    if (node.right) {
        recur(node.right, result);
    }
};

const iterate = (root) => {

    let node = root, result = [], stack = [];
    if (!node) return result;

    while (node) {
        if (!result.includes(node)) result.push(node);
        let {left, right} = node;
        if (left && !result.includes(left)) {
            stack.push(node);
            node = left;
            continue;
        }
        if (right && !result.includes(right)) {
            stack.push(node);
            node = right;
            continue;
        }
        node = stack.pop();
    }
    return result.map(n => n.val);
};

const recurWalk = tree => {
    const result = [];
    recur(tree, result);
    return result;
};

const iterateWalk = tree => {
    return iterate(tree);
};


run([{desc: 'Pre order with recur', exec: recurWalk},
    {desc: 'Pre order with iterate', exec: iterateWalk}]);
