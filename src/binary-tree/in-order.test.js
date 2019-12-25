const {recurWalk, iterateWalk} = require('./in-order');

const Tree = {
    "left": {
        "left": {
            "left": {
                "left": {
                    "left": null,
                    "right": null,
                    "val": 13
                },
                "right": null,
                "val": 2
            },
            "right": null,
            "val": 18
        },
        "right": {
            "left": {
                "left": null,
                "right": {
                    "left": null,
                    "right": null,
                    "val": 36
                },
                "val": 16
            },
            "right": {
                "left": {
                    "left": null,
                    "right": null,
                    "val": 34
                },
                "right": {
                    "left": null,
                    "right": null,
                    "val": 37
                },
                "val": 26
            },
            "val": 7
        },
        "val": 6
    },
    "right": {
        "left": null,
        "right": {
            "left": null,
            "right": null,
            "val": 15
        },
        "val": 4
    },
    "val": 0
};

test('traverse binary tree in in-order with recur', () => {
    expect(recurWalk(Tree)).toEqual([ 13, 2, 18, 6, 16, 36, 7, 34, 26, 37, 0, 4, 15 ])
});

test('traverse binary tree in in-order with iterate', () => {
    expect(iterateWalk(Tree)).toEqual([ 13, 2, 18, 6, 16, 36, 7, 34, 26, 37, 0, 4, 15 ])
});
