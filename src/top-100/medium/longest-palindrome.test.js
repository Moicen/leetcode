const { longestPalindrome } = require("./longest-palindrome");


test("Longest Palindromic Substring", () => {
    expect(longestPalindrome("abcba")).toEqual("abcba");
    expect(longestPalindrome("abba")).toEqual("abba");
    expect(longestPalindrome("cbbd")).toEqual("bb");
    expect(longestPalindrome("ccc")).toEqual("ccc");
});
