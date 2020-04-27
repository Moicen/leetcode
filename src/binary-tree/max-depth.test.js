const { t2bWalk, b2tWalk } = require('./max-depth');

const Tree = {
    "left": {
        "left": {
            "left": {
                "left": {
                    "left": {
                        "left": {
                            "left": {
                                "left": null,
                                "right": null,
                                "val": 44
                            },
                            "right": null,
                            "val": 46
                        },
                        "right": null,
                        "val": 35
                    },
                    "right": null,
                    "val": 20
                },
                "right": {
                    "left": {
                        "left": {
                            "left": null,
                            "right": null,
                            "val": 30
                        },
                        "right": {
                            "left": null,
                            "right": null,
                            "val": 29
                        },
                        "val": 16
                    },
                    "right": null,
                    "val": 31
                },
                "val": 19
            },
            "right": null,
            "val": 12
        },
        "right": null,
        "val": 2
    },
    "right": {
        "left": {
            "left": null,
            "right": null,
            "val": 3
        },
        "right": null,
        "val": 4
    },
    "val": 0
};

test('max depth with top-bottom', () => {
    expect(t2bWalk(Tree)).toBe(8);
});

test('max depth with bottom-top', () => {
    expect(b2tWalk(Tree)).toBe(8);
});
