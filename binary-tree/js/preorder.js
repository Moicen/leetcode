const log = require('../../utils/log')
const generate = require('./builder')

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


const run = () => {
    let tree = generate();
    log('Tree : ')
    log(tree);
    log(`Preorder travel with recursive: `)
    log(recurWalk(tree), true)
    log('Preorder travel with iterate: ')
    log(iterateWalk(tree), true)
};

run();