const run = require('./runner');
const log = require('../utils/log');

/**
 * 判断二叉树是否对称
 * 对称特性：left.left == right.right, left.right == right.left
 */

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

const iterate = (root) => {
    if (!root) return true;

    const pairs = [{left: root.left, right: root.right}];
    while (pairs.length > 0) {
        let {left, right} = pairs.pop();
        if (!left && !right) {
            continue;
        }
        if (left && right) {
            if (left.val === right.val) {
                pairs.push({left: left.left, right: right.right});
                pairs.push({left: right.left, right: left.right})
                continue;
            }
            return false;
        }
        return false;
    }
    return true;
};

const recurWalk = (root) => {
    log("Tree: ");
    log(root, true);
    if (!root) return true;
    return recur(root.left, root.right);
};

const iterateWalk = (root) => {
    log("Tree: ");
    log(root, true);
    return iterate(root);
}

run([
    {desc: 'Test symmetric tree1 (use recur)', exec: () => recurWalk(tree1)},
    {desc: 'Test symmetric tree2 (use recur)', exec: () => recurWalk(tree2)},
    {desc: 'Test symmetric tree1 (use iterate)', exec: () => iterateWalk(tree1)},
    {desc: 'Test symmetric tree2 (use iterate)', exec: () => iterateWalk(tree2)},
]);



