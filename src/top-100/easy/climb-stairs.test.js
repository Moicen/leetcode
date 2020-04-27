const { climbStairs } = require("./climb-stairs");


test("Climb stairs", () => {
    expect(climbStairs(1)).toBe(1);
    expect(climbStairs(2)).toBe(2);
    expect(climbStairs(3)).toBe(3);
    expect(climbStairs(45)).toBe(1836311903);
});
