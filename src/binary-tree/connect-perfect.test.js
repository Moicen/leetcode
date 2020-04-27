const { recurWalk, iterateWalk } = require("./connect-perfect");

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

const ConnectedPerfectTree1 = {
    "$id": "1",
    "left": {
        "$id": "2",
        "left": {
            "$id": "3",
            "left": null,
            "next": {
                "$id": "4",
                "left": null,
                "next": {
                    "$id": "6",
                    "left": null,
                    "next": {
                        "$id": "7",
                        "left": null,
                        "next": null,
                        "right": null,
                        "val": 7
                    },
                    "right": null,
                    "val": 6
                },
                "right": null,
                "val": 5
            },
            "right": null,
            "val": 4
        },
        "next": {
            "$id": "5",
            "left": {
                "$id": "6",
                "left": null,
                "next": {
                    "$id": "7",
                    "left": null,
                    "next": null,
                    "right": null,
                    "val": 7
                },
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
        "right": {
            "$id": "4",
            "left": null,
            "next": {
                "$id": "6",
                "left": null,
                "next": {
                    "$id": "7",
                    "left": null,
                    "next": null,
                    "right": null,
                    "val": 7
                },
                "right": null,
                "val": 6
            },
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
            "next": {
                "$id": "7",
                "left": null,
                "next": null,
                "right": null,
                "val": 7
            },
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

const ConnectedPerfectTree2 = {
    "$id": "1",
    "left": {
        "$id": "2",
        "left": {
            "$id": "3",
            "left": null,
            "next": {
                "$id": "4",
                "left": null,
                "next": {
                    "$id": "6",
                    "left": null,
                    "next": {
                        "$id": "7",
                        "left": null,
                        "next": null,
                        "right": null,
                        "val": 7
                    },
                    "right": null,
                    "val": 6
                },
                "right": null,
                "val": 5
            },
            "right": null,
            "val": 4
        },
        "next": {
            "$id": "5",
            "left": {
                "$id": "6",
                "left": null,
                "next": {
                    "$id": "7",
                    "left": null,
                    "next": null,
                    "right": null,
                    "val": 7
                },
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
        "right": {
            "$id": "4",
            "left": null,
            "next": {
                "$id": "6",
                "left": null,
                "next": {
                    "$id": "7",
                    "left": null,
                    "next": null,
                    "right": null,
                    "val": 7
                },
                "right": null,
                "val": 6
            },
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
            "next": {
                "$id": "7",
                "left": null,
                "next": null,
                "right": null,
                "val": 7
            },
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

test("connect tree with recur", () => {
    expect(recurWalk(PerfectTree1)).toEqual(ConnectedPerfectTree1);
});

test("connect tree with iterate", () => {
    expect(iterateWalk(PerfectTree2)).toEqual(ConnectedPerfectTree2);
});
