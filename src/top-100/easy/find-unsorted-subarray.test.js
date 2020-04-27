const { findUnsortedSubarray } = require("./find-unsorted-subarray");


test("Shortest Unsorted Continuous Subarray", () => {
    expect(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15])).toBe(5);
    expect(findUnsortedSubarray([1, 2, 3, 4])).toBe(0);
    expect(findUnsortedSubarray([1])).toBe(0);
    expect(findUnsortedSubarray([1, 2, 3, 3, 3])).toBe(0);
    expect(findUnsortedSubarray([1, 3, 2, 2, 2])).toBe(4);
    expect(findUnsortedSubarray([1, 3, 2, 3, 3])).toBe(2);
});
