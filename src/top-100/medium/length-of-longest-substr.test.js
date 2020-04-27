const { lengthOfLongestSubstring } = require("./length-of-longest-substr");


test("Longest Substring Without Repeating Characters", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
    expect(lengthOfLongestSubstring(" ")).toBe(1);
    expect(lengthOfLongestSubstring("au")).toBe(2);
    expect(lengthOfLongestSubstring("dvdf")).toBe(3);
});
