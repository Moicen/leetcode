const { recurWalk, iterateWalk } = require('./pre-order');

const Tree = {
    "left": {
        "left": {
            "left": null,
            "right": null,
            "val": 4
        },
        "right": null,
        "val": 3
    },
    "right": {
        "left": {
            "left": null,
            "right": null,
            "val": 17
        },
        "right": {
            "left": {
                "left": null,
                "right": null,
                "val": 5
            },
            "right": {
                "left": {
                    "left": null,
                    "right": null,
                    "val": 25
                },
                "right": {
                    "left": null,
                    "right": null,
                    "val": 2
                },
                "val": 23
            },
            "val": 7
        },
        "val": 1
    },
    "val": 0
};

test('traverse binary tree in pre-order with recur', () => {
    expect(recurWalk(Tree)).toEqual([0, 3, 4, 1, 17, 7, 5, 23, 25, 2]);
});

test('traverse binary tree in pre-order with iterate', () => {
    expect(iterateWalk(Tree)).toEqual([0, 3, 4, 1, 17, 7, 5, 23, 25, 2]);
});
