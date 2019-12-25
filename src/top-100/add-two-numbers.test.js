const {addTwoNumbers} = require("./add-two-numbers");

const L1 = {val: 2, next: {val: 4, next: {val: 3, next: null}}};
const L2 = {val: 5, next: {val: 6, next: {val: 4, next: null}}};


test("Add Two Numbers", () => {
    expect(addTwoNumbers(L1, L2)).toEqual({val: 7, next: {val: 0, next: {val: 8, next: null}}})
});
