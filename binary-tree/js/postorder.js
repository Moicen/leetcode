const run = require('./runner');

const recur = (node, result) => {
    if (!node) return;
    let {left, right} = node;
    if (left) {
        recur(left, result);
    }
    if (right) {
        recur(right, result);
    }
    result.push(node.val);
}

const iterate = (root) => {
    let node = root, result = [], stack = [];
    stack.push(node);
    while (node) {
        let {left, right} = node;
        if (left && !result.includes(left)) {
            stack.push(left);
            node = left;
            continue;
        }
        if (right && !result.includes(right)) {
            if(!stack.includes(node)){
                stack.push(node);
            }
            stack.push(right);
            node = right;
            continue;
        }
        if(!result.includes(node)) result.push(node)
        node = stack.pop();
    }

    return result.map(x => x.val)
}

const recurWalk = tree => {
    const result = [];
    recur(tree, result);
    return result;
};

const iterateWalk = tree => {
    return iterate(tree);
};

run([{desc: 'Post order with recur', exec: recurWalk},
    {desc: 'Post order with iterate', exec: iterateWalk}]);
