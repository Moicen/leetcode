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

const recur = (origin, target) => {
    if (origin && target) {
        let same = origin.val === target.val;
        return same && recur(origin.left, target.right) && recur(origin.right, target.left);
    }
    return !origin && !target;
};

const isSymmetric = function (root) {
    log("Tree: ");
    log(root, true);
    if (!root) return true;
    return recur(root.left, root.right);
};


run([
    {desc: 'Test symmetric tree1 (use recur)', exec: () => isSymmetric(tree1)},
    {desc: 'Test symmetric tree2 (use recur)', exec: () => isSymmetric(tree2)},
]);



