const {recurWalk, iterateWalk} = require("./connect");

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

const ConnectedTree1 = {
    "$id": "1",
    "left": {
        "$id": "2",
        "left": null,
        "next": {
            "$id": "3",
            "left": {
                "$id": "4",
                "left": null,
                "next": {
                    "$id": "5",
                    "left": null,
                    "next": null,
                    "right": null,
                    "val": 7
                },
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
        "right": null,
        "val": 9
    },
    "next": null,
    "right": {
        "$id": "3",
        "left": {
            "$id": "4",
            "left": null,
            "next": {
                "$id": "5",
                "left": null,
                "next": null,
                "right": null,
                "val": 7
            },
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

const ConnectedTree2 = {
    "$id": "1",
    "left": {
        "$id": "2",
        "left": {
            "$id": "3",
            "left": {
                "$id": "4",
                "left": null,
                "next": {
                    "$id": "5",
                    "left": null,
                    "next": {
                        "$id": "8",
                        "left": null,
                        "next": {
                            "$id": "10",
                            "left": null,
                            "next": null,
                            "right": null,
                            "val": 8
                        },
                        "right": null,
                        "val": 6
                    },
                    "right": null,
                    "val": 1
                },
                "right": null,
                "val": 5
            },
            "next": {
                "$id": "7",
                "left": null,
                "next": {
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
                "right": {
                    "$id": "8",
                    "left": null,
                    "next": {
                        "$id": "10",
                        "left": null,
                        "next": null,
                        "right": null,
                        "val": 8
                    },
                    "right": null,
                    "val": 6
                },
                "val": 3
            },
            "right": {
                "$id": "5",
                "left": null,
                "next": {
                    "$id": "8",
                    "left": null,
                    "next": {
                        "$id": "10",
                        "left": null,
                        "next": null,
                        "right": null,
                        "val": 8
                    },
                    "right": null,
                    "val": 6
                },
                "right": null,
                "val": 1
            },
            "val": 1
        },
        "next": {
            "$id": "6",
            "left": {
                "$id": "7",
                "left": null,
                "next": {
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
                "right": {
                    "$id": "8",
                    "left": null,
                    "next": {
                        "$id": "10",
                        "left": null,
                        "next": null,
                        "right": null,
                        "val": 8
                    },
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
        "right": null,
        "val": 2
    },
    "next": null,
    "right": {
        "$id": "6",
        "left": {
            "$id": "7",
            "left": null,
            "next": {
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
            "right": {
                "$id": "8",
                "left": null,
                "next": {
                    "$id": "10",
                    "left": null,
                    "next": null,
                    "right": null,
                    "val": 8
                },
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

test("connect tree with recur", () => {
    expect(recurWalk(Tree1)).toEqual(ConnectedTree1);
});

test("connect tree with iterate", () => {
    expect(iterateWalk(Tree2)).toEqual(ConnectedTree2);
});
