const { diameterOfBinaryTree } = require("./diameter-of-binary-tree");

const Tree1 = {
    val: 1, left: { val: 2, left: { val: 4 }, right: { val: 5 } }, right: { val: 3 }
};

test("Diameter of Binary Tree", () => {
    expect(diameterOfBinaryTree(Tree1)).toBe(3);
});
