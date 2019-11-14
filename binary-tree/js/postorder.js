const log = require('../../utils/log')
const generate = require('./builder')


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
    stack.push(node)
    while (node) {
        let {left, right} = node;
        if (left && !result.includes(left)) {
            stack.push(left);
            node = left;
            continue;
        }
        if (right && !result.includes(right)) {
            stack.push(right);
            node = right;
            continue;
        }

        if (!result.includes(node)) result.push(node)

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


const run = () => {
    let tree = generate();
    log('Tree : ')
    log(tree);
    log(`Postorder travel with recursive: `)
    log(recurWalk(tree), true)
    log('Postorder travel with iterate: ')
    log(iterateWalk(tree), true)
};

run();