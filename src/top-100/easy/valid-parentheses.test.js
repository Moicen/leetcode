const { isValid } = require("./valid-parentheses");

test("'()[]{}' is valid parentheses ", () => {
    expect(isValid('()[]{}')).toBeTruthy();
});

test("'{[]}' is valid parentheses ", () => {
    expect(isValid('{[]}')).toBeTruthy();
});
test("'{(})[]' is invalid parentheses ", () => {
    expect(isValid('{(})[]')).toBeFalsy();
});
test("'{[]}({})[{()}]' is valid parentheses ", () => {
    expect(isValid('{[]}({})[{()}]')).toBeTruthy();
});
