const {recur, iterate} = require('./house-robber');


test("house robber in recur", () => {
    expect(recur([1,2,3,1])).toBe(4);
    expect(recur([2,7,9,3,1])).toBe(12);
    expect(recur([2,1,1,2])).toBe(4);
});


test("house robber in iteratee", () => {
    expect(iterate([1,2,3,1])).toBe(4);
    expect(iterate([2,7,9,3,1])).toBe(12);
    expect(iterate([2,1,1,2])).toBe(4);
});
