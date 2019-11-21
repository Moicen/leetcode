const run = require('./runner');
const log = require('../../utils/log');
const tree1 = {
    left: {
        left: {val: 3},
        right: {val: 4},
        val: 2
    },
    right: {
        left: {val: 4},
        right: {val: 3},
        val: 2
    },
    val: 1
};

const tree2 = {
    left: {
        left: {val: 2},
        val: 2
    },
    right: {
        left: {val: 2},
        val: 2
    },
    val: 1
};


const turnover = (node) => {
    if (!node) return node;
    let {left = null, right = null, val} = node;
    return {
        left: turnover(right),
        right: turnover(left),
        val
    };
};

const isSame = (origin, target) => {
    if (origin && target) {
        let same = origin.val === target.val;
        return same && isSame(origin.left, target.left) && isSame(origin.right, target.right);
    }
    return !origin && !target;
};


const isSymmetric = function (root) {
    log("Tree: ");
    log(root, true);
    if (!root) return true;
    return isSame(root, turnover(root));
};

run([
    {desc: 'Test symmetric tree1 (use mirror)', exec: () => isSymmetric(tree1)},
    {desc: 'Test symmetric tree2 (use mirror)', exec: () => isSymmetric(tree2)}
]);



