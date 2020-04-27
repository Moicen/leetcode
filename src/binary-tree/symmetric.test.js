const { recurWalk, iterateWalk } = require('./symmetric');


const SymmetricTree = {
    left: {
        left: { val: 3 },
        right: { val: 4 },
        val: 2
    },
    right: {
        left: { val: 4 },
        right: { val: 3 },
        val: 2
    },
    val: 1
};
const NonsymmetricTree = {
    left: {
        left: { val: 2 },
        val: 2
    },
    right: {
        left: { val: 2 },
        val: 2
    },
    val: 1
};

test("Test symmetric tree (use recur)", () => {
    expect(recurWalk(SymmetricTree)).toBeTruthy();
    expect(recurWalk(NonsymmetricTree)).toBeFalsy();
});

test("Test symmetric tree (use iterate)", () => {
    expect(iterateWalk(SymmetricTree)).toBeTruthy();
    expect(iterateWalk(NonsymmetricTree)).toBeFalsy();
});
