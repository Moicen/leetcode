/**
 * Symmetric Tree
 * https://leetcode.com/explore/learn/card/data-structure-tree/17/solve-problems-recursively/536/
 *
 */

/**
 * 判断二叉树是否对称
 * 对称特性：left.left == right.right, left.right == right.left
 */


const recur = (origin, target) => {
    if (origin && target) {
        let same = origin.val === target.val;
        return same && recur(origin.left, target.right) && recur(origin.right, target.left);
    }
    return !origin && !target;
};

const iterate = (root) => {
    if (!root) return true;

    const pairs = [{ left: root.left, right: root.right }];
    while (pairs.length > 0) {
        let { left, right } = pairs.pop();
        if (!left && !right) {
            continue;
        }
        if (left && right) {
            if (left.val === right.val) {
                pairs.push({ left: left.left, right: right.right });
                pairs.push({ left: right.left, right: left.right });
                continue;
            }
            return false;
        }
        return false;
    }
    return true;
};

const recurWalk = (root) => {
    if (!root) return true;
    return recur(root.left, root.right);
};

const iterateWalk = (root) => {
    return iterate(root);
};

module.exports = {
    recurWalk, iterateWalk
};



