/**
 * Populating Next Right Pointers in Each Node II
 * https://leetcode.com/explore/learn/card/data-structure-tree/133/conclusion/1016/
 *
 */

const run = require('./runner');

const Tree1 = {
    "$id": "1",
    "left": {
        "$id": "2",
        "left": null,
        "next": null,
        "right": null,
        "val": 9
    },
    "next": null,
    "right": {
        "$id": "3",
        "left": {
            "$id": "4",
            "left": null,
            "next": null,
            "right": null,
            "val": 15
        },
        "next": null,
        "right": {
            "$id": "5",
            "left": null,
            "next": null,
            "right": null,
            "val": 7
        },
        "val": 20
    },
    "val": 3
};
const Tree2 = {
    "$id": "1",
    "left": {
        "$id": "2",
        "left": {
            "$id": "3",
            "left": {
                "$id": "4",
                "left": null,
                "next": null,
                "right": null,
                "val": 5
            },
            "next": null,
            "right": {
                "$id": "5",
                "left": null,
                "next": null,
                "right": null,
                "val": 1
            },
            "val": 1
        },
        "next": null,
        "right": null,
        "val": 2
    },
    "next": null,
    "right": {
        "$id": "6",
        "left": {
            "$id": "7",
            "left": null,
            "next": null,
            "right": {
                "$id": "8",
                "left": null,
                "next": null,
                "right": null,
                "val": 6
            },
            "val": 3
        },
        "next": null,
        "right": {
            "$id": "9",
            "left": null,
            "next": null,
            "right": {
                "$id": "10",
                "left": null,
                "next": null,
                "right": null,
                "val": 8
            },
            "val": -1
        },
        "val": 4
    },
    "val": 0
};

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
        })
        parent = current;
        current = [];
    }
};

const iterateWalk = (tree) => {
    iterate(tree);
    return tree;
};

run([
    {desc: "connect tree with recur: ", exec: () => recurWalk(Tree1), json: true},
    {desc: "connect tree with iterate: ", exec: () => iterateWalk(Tree2), json: true},
], false);
