/**
 * Populating Next Right Pointers in Each Node II
 * https://leetcode.com/explore/learn/card/data-structure-tree/133/conclusion/1016/
 *
 */

/**
 * 将二叉树的每个节点的next属性指向同层右边的节点
 * @param nodes
 */

const recur = (nodes) => {
    if (nodes.length === 0) return;
    let children = [];
    nodes.forEach((node, index) => {
        node.next = nodes[index + 1] || null;
        let {left, right} = node;
        if (left) children.push(left);
        if (right) children.push(right);
    });
    recur(children)
};

const recurWalk = (tree) => {
    recur([tree]);
    return tree;
};

const iterate = (root) => {
    if (!root) return;
    let parent = [], current = [];
    parent.push(root);
    while (parent.length) {
        parent.forEach((node, index) => {
            node.next = parent[index + 1] || null;
            let {left, right} = node;
            if (left) current.push(left);
            if (right) current.push(right);
        });
        parent = current;
        current = [];
    }
};

const iterateWalk = (tree) => {
    iterate(tree);
    return tree;
};

module.exports = {
    recurWalk, iterateWalk
};
