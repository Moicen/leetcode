const {recurWalk, iterateWalk} = require('./post-order');

const Tree = {
    "left": {
        "left": {
            "left": null,
            "right": {
                "left": {
                    "left": null,
                    "right": null,
                    "val": 4
                },
                "right": {
                    "left": null,
                    "right": null,
                    "val": 2
                },
                "val": 7
            },
            "val": 16
        },
        "right": {
            "left": {
                "left": {
                    "left": null,
                    "right": null,
                    "val": 22
                },
                "right": null,
                "val": 5
            },
            "right": {
                "left": null,
                "right": {
                    "left": null,
                    "right": null,
                    "val": 29
                },
                "val": 30
            },
            "val": 1
        },
        "val": 8
    },
    "right": null,
    "val": 0
};

test('traverse binary tree in post-order with recur', () => {
    expect(recurWalk(Tree)).toEqual([4, 2, 7, 16, 22, 5, 29, 30, 1, 8, 0])
});

test('traverse binary tree in post-order with iterate', () => {
    expect(iterateWalk(Tree)).toEqual([4, 2, 7, 16, 22, 5, 29, 30, 1, 8, 0])
});
