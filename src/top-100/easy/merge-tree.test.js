const { mergeTrees } = require("./merge-tree");

const Tree1 = {
    val: 1,
    left: { val: 3, left: { val: 5 } },
    right: { val: 2 }
};

const Tree2 = {
    val: 2,
    left: { val: 1, right: { val: 4 } },
    right: { val: 3, right: { val: 7 } }
};

const Tree3 = {
    val: 3,
    left: {
        val: 4,
        left: { val: 5, left: null, right: null },
        right: { val: 4, left: null, right: null }
    },
    right: { val: 5, left: null, right: { val: 7, left: null, right: null } }
};

test("Merge Two Binary Trees", () => {
    expect(mergeTrees(Tree1, Tree2)).toEqual(Tree3);
});
