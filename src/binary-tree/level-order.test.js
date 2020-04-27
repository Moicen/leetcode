const { recurWalk, iterateWalk } = require('./level-order');

const Tree = {
    "left": {
        "left": null,
        "right": {
            "left": {
                "left": null,
                "right": null,
                "val": 24
            },
            "right": null,
            "val": 15
        },
        "val": 3
    },
    "right": {
        "left": null,
        "right": {
            "left": null,
            "right": {
                "left": null,
                "right": {
                    "left": null,
                    "right": null,
                    "val": 4
                },
                "val": 9
            },
            "val": 19
        },
        "val": 5
    },
    "val": 0
};

test('traverse binary tree in level-order with recur', () => {
    expect(recurWalk(Tree)).toEqual([[0], [3, 5], [15, 19], [24, 9], [4]]);
});

test('traverse binary tree in level-order with iterate', () => {
    expect(iterateWalk(Tree)).toEqual([[0], [3, 5], [15, 19], [24, 9], [4]]);
});
