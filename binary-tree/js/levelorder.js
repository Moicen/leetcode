const run = require('./runner');

const recur = (nodes, result) => {
    if (nodes.length === 0) return;
    result.push(nodes.map(x => x.val));
    let children = [];
    nodes.forEach(node => {
        let {left, right} = node;
        if (left) children.push(left);
        if (right) children.push(right);
    })
    recur(children, result)
};

const iterate = (root) => {
    let parent = [], current = [], result = [];
    if (!root) return result;
    parent.push(root)
    result.push(parent.map(x => x.val))
    while (parent.length) {
        parent.forEach(node => {
            let {left, right} = node;
            if (left) current.push(left);
            if (right) current.push(right);
        });
        if(current.length > 0){
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


run('Level order', recurWalk, iterateWalk);