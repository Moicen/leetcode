const {pathSum} = require("./path-sum-3")


const Tree1 = {
    val: 10,
    left: {
        val: 5,
        left: {
            val: 3, left: {val: 3}, right: {val: -2}
        },
        right: {
            val: 2, right: {val: 1}
        }
    },
    right: {
        val: -3, right: {val: 11}
    }
};

const Tree2 = {
    val: 1, right: {val: 2, right: {val: 3, right: {val: 4, right: {val: 5}}}}
}

test("path sum III", () => {
    expect(pathSum(Tree1, 8)).toEqual(3);
    expect(pathSum(Tree2, 3)).toEqual(2);
});
