const {singleNumber} = require('./single-number');

test("Max Profit test", () => {
    expect(singleNumber([2, 2, 1])).toBe(1);
    expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
});
