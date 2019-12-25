const {serialize, deserialize} = require('./serialization');

const Tree = {
    "left": {
        "left": {
            "left": {
                "left": {
                    "left": null,
                    "right": null,
                    "val": 18
                },
                "right": null,
                "val": 25
            },
            "right": null,
            "val": 14
        },
        "right": {
            "left": {
                "left": {
                    "left": null,
                    "right": null,
                    "val": 3
                },
                "right": null,
                "val": 17
            },
            "right": {
                "left": {
                    "left": null,
                    "right": null,
                    "val": 24
                },
                "right": null,
                "val": 22
            },
            "val": 10
        },
        "val": 9
    },
    "right": {
        "left": {
            "left": null,
            "right": {
                "left": null,
                "right": null,
                "val": 2
            },
            "val": 13
        },
        "right": null,
        "val": 8
    },
    "val": 0
};


test("deserialize binary tree", () => {
    expect(deserialize(serialize(Tree))).toEqual(Tree);
});
