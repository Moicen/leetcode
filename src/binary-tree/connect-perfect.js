/**
 * Populating Next Right Pointers in Each Node
 * https://leetcode.com/explore/learn/card/data-structure-tree/133/conclusion/994/
 *
 */

/**
 * 将二叉树的每个节点的next属性指向同层右边的节点
 * @param root
 */

const recur = (root) => {
    if (!root) return;

    let {left, right} = root;
    if (left) left.next = right || null;
    if (right) {
        let uncle = root.next;
        if (uncle) right.next = uncle.left || null;
    }
    recur(left);
    recur(right);
};

const recurWalk = (tree) => {
    recur(tree);
    return tree;
};

const iterate = (root) => {
    if (!root) return;
    const stack = [root], routes = [];
    let node;
    while ((node = stack.pop())) {
        routes.push(node);
        let {left, right} = node;
        if (left && !routes.includes(left)) {
            left.next = right;
            stack.push(node);
            stack.push(left);
            continue;
        }
        if (right && !routes.includes(right)) {
            let uncle = node.next;
            if (uncle && right.next !== uncle.left) {
                right.next = uncle.left;
            }
            stack.push(node);
            stack.push(right);
            continue;
        }
    }
};

const iterateWalk = (tree) => {
    iterate(tree);
    return tree;
};

module.exports = {
    recurWalk, iterateWalk
};
