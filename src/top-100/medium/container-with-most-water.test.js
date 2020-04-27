const { maxArea } = require("./container-with-most-water");


test("Container with Max water", () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
});
