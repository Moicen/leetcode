const { recur, iterate } = require('./path-sum');

const Tree = {
    "left": {
        "left": { "left": null, "right": null, "val": 4 },
        "right": { "left": null, "right": null, "val": 5 },
        "val": 2
    },
    "right": {
        "left": { "left": null, "right": null, "val": 6 },
        "right": { "left": null, "right": null, "val": 7 },
        "val": 3
    },
    "val": 1
};

test("check path sum with recur", () => {
    expect(recur(Tree, 10)).toBeTruthy();
    expect(recur(Tree, 9)).toBeFalsy();
});

test("check path sum with iterate", () => {
    expect(iterate(Tree, 7)).toBeTruthy();
    expect(iterate(Tree, 12)).toBeFalsy();
});
