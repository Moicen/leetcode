const log = require('../../utils/log')
const generate = require('./builder')

const recur = (node, result) => {
    if(!node) return;
    let {left, right} = node;
    if(left){
        recur(left, result);
    }
    result.push(node.val)
    if(right){
        recur(right, result);
    }
}

const iterate = (root) => {
    const result = [], stack = [];
    if(!root) return result;
    let node = root;
    stack.push(node);
    while(node){
        let { left, right } = node;
        if(left && !result.includes(left)){
            stack.push(node);
            node = left;
            continue;
        }
        if(!result.includes(node)) result.push(node);

        if(right && !result.includes(right)){
            stack.push(node);
            node = right;
            continue;
        }
        node = stack.pop();
    }
    return result.map(x => x.val);
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
    log(`Ineorder travel with recursive: `);
    log(recurWalk(tree), true)
    log('Ineorder travel with iterate: ');
    log(iterateWalk(tree), true)
};

run();