const {lca} = require('./lca');

const Tree = {
    val: 3,
    left: {
        val: 5,
        left: {val: 6},
        right: {val: 2, left: {val: 7}, right: {val: 4}},
    },
    right: {
        val: 1, left: {val: 0}, right: {val: 8}
    }
};
test("get lowest common ancestor", () => {
    expect(lca(Tree, 5, 4)).toEqual({
        val: 5,
        left: {val: 6},
        right: {val: 2, left: {val: 7}, right: {val: 4}},
    });

    expect(lca(Tree, 0, 8)).toEqual({val: 1, left: {val: 0}, right: {val: 8}});
});
