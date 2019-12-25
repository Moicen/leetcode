const {recurWalk, iterateWalk} = require('./pre-in-to-tree');

const PreOrderOutput = [3, 9, 20, 15, 7];
const InOrderOutput = [9, 3, 15, 20, 7];

const Tree = {
    val: 3,
    left: {val: 9, left: null, right: null},
    right:
        {
            val: 20,
            left: {val: 15, left: null, right: null},
            right: {val: 7, left: null, right: null}
        }
};

test('construct tree from pre-order and in-order result with recur', () => {
    expect(recurWalk(PreOrderOutput, InOrderOutput)).toEqual(Tree)
});

test('construct tree from pre-order and in-order result with recur', () => {
    expect(iterateWalk(PreOrderOutput, InOrderOutput)).toEqual(Tree)
});
