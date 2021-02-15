const {
    reverse, isPalindrome, removeElement, strStr, countAndSay, checkPossibility,
} = require("./sundry");




test("Reverse", () => {
    expect(reverse(123)).toBe(321);
    expect(reverse(-2147483412)).toBe(-2143847412);
});

test("is palindrome", () => {
    expect(isPalindrome(121)).toBeTruthy();
    expect(isPalindrome(-121)).toBeFalsy();
});

test("remove element", () => {
    expect(removeElement([3,2,2,3], 3)).toEqual(2);
    expect(removeElement([0,1,2,2,3,0,4,2], 2)).toEqual(5);
});

test("str index", () => {
    expect(strStr("hello", "ll")).toEqual(2);
    expect(strStr("aaaaa", "bba")).toEqual(-1);
    expect(strStr("mississippi", "issip")).toEqual(4);
    expect(strStr("aaa", "aaaa")).toEqual(-1);
});

test("count and say", () => {
    expect(countAndSay(1)).toEqual("1");
    expect(countAndSay(2)).toEqual("11");
    expect(countAndSay(3)).toEqual("21");
    expect(countAndSay(4)).toEqual("1211");
    expect(countAndSay(5)).toEqual("111221");
});

test("check possibility", () => {
    // expect(checkPossibility([4, 2, 3])).toBeTruthy();
    // expect(checkPossibility([4, 2, 1])).toBeFalsy();
    expect(checkPossibility([3, 4, 2, 3])).toBeFalsy();
})





