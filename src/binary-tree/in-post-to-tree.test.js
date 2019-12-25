const {recurWalk, iterateWalk} = require('./in-post-to-tree');

const InOrderOutput = [2, 3, 1];
const PostOrderOutput = [3, 2, 1];

const Tree = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: {val: 3, left: null, right: null}
    },
    right: null
};

test('construct tree from in-order and post-order result with recur', () => {
    expect(recurWalk(InOrderOutput, PostOrderOutput)).toEqual(Tree)
});

test('construct tree from in-order and post-order result with recur', () => {
    expect(iterateWalk(InOrderOutput, PostOrderOutput)).toEqual(Tree)
});
