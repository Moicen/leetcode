const {maxProfit} = require('./max-stock-profit');

test("Max Profit test", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
    expect(maxProfit([3, 3, 5, 0, 0, 3, 1, 4])).toBe(4);
});
