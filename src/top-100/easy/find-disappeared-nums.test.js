const { findDisappearedNumbers } = require("./find-disappeared-nums");


test("Find All Numbers Disappeared in an Array", () => {
    expect(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6]);
    expect(findDisappearedNumbers([1, 1])).toEqual([2]);
});
