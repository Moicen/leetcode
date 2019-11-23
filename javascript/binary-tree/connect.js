const run = require('./runner');

const PerfectTree1 = {
    "$id": "1",
    "left": {
        "$id": "2",
        "left": {
            "$id": "3",
            "left": null,
            "next": null,
            "right": null,
            "val": 4
        },
        "next": null,
        "right": {
            "$id": "4",
            "left": null,
            "next": null,
            "right": null,
            "val": 5
        },
        "val": 2
    },
    "next": null,
    "right": {
        "$id": "5",
        "left": {
            "$id": "6",
            "left": null,
            "next": null,
            "right": null,
            "val": 6
        },
        "next": null,
        "right": {
            "$id": "7",
            "left": null,
            "next": null,
            "right": null,
            "val": 7
        },
        "val": 3
    },
    "val": 1
};
const PerfectTree2 = {
    "$id": "1",
    "left": {
        "$id": "2",
        "left": {
            "$id": "3",
            "left": null,
            "next": null,
            "right": null,
            "val": 4
        },
        "next": null,
        "right": {
            "$id": "4",
            "left": null,
            "next": null,
            "right": null,
            "val": 5
        },
        "val": 2
    },
    "next": null,
    "right": {
        "$id": "5",
        "left": {
            "$id": "6",
            "left": null,
            "next": null,
            "right": null,
            "val": 6
        },
        "next": null,
        "right": {
            "$id": "7",
            "left": null,
            "next": null,
            "right": null,
            "val": 7
        },
        "val": 3
    },
    "val": 1
};

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
    console.log("Perfect tree: ", tree);
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
    console.log("Perfect tree: ", tree);
    iterate(tree);
    return tree;
};

run([
    {desc: "connect perfect tree with recur: ", exec: () => recurWalk(PerfectTree1), json: true},
    {desc: "connect perfect tree with iterate: ", exec: () => iterateWalk(PerfectTree2), json: true}
], false);
