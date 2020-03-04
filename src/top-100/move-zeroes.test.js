const {moveZeroes} = require('./move-zeroes')


test("move zeroes to list end", () => {
    let arr1 = [0, 0, 1, 3, 0, 4, 0, 6];
    moveZeroes(arr1);
    expect(arr1).toEqual([1, 3, 4, 6, 0, 0, 0, 0]);
    let arr2 = [1, 0, 0, 2, 5, 0, 6, 0];
    moveZeroes(arr2)
    expect(arr2).toEqual([1, 2, 5, 6, 0, 0, 0, 0]);
})
