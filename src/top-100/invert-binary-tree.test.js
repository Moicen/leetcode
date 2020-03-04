const {invertTree} = require("./invert-binary-tree");


const Tree1 = {
    val: 4,
    left: {val: 2, left: {val: 1}, right: {val: 3}},
    right: {val: 7, left: {val: 6}, right: {val: 9}}
};

const Tree2 = {
    val: 4,
    left: {val: 7, left: {val: 9}, right: {val: 6}},
    right: {val: 2, left: {val: 3}, right: {val: 1}}
}

test("Inverse Binary Tree", () => {
    expect(invertTree(Tree1)).toEqual(Tree2);
});
