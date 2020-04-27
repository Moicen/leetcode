const { lengthOfLongestSubstring } = require('./longest-pure-substring');


test("Linked list has circle", () => {
    expect(lengthOfLongestSubstring('abcabcabc')).toBe(3);
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
    expect(lengthOfLongestSubstring('wwekefefe')).toBe(3);
    expect(lengthOfLongestSubstring(' ')).toBe(1);
});
