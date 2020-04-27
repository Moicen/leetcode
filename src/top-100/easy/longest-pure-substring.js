/**
 * Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Given a string, find the length of the longest substring without repeating characters.
 *
 *  Example 1:
 *
 *   Input: "abcabcbb"
 *   Output: 3
 *   Explanation: The answer is "abc", with the length of 3.
 *
 *  Example 2:
 *
 *   Input: "bbbbb"
 *   Output: 1
 *   Explanation: The answer is "b", with the length of 1.
 *
 *  Example 3:
 *
 *   Input: "pwwkew"
 *   Output: 3
 *   Explanation: The answer is "wke", with the length of 3.
 *   Note that the answer must be a substring, "pwke" is a subsequence and not a substring.*
 */


const lengthOfLongestSubstring = (s) => {
    if (!s) return 0;
    let chars = s.split(''), temp = [], max = 0;
    chars.forEach(char => {
        let index = temp.indexOf(char);
        if (index >= 0) {
            max = Math.max(max, temp.length);
            temp = temp.slice(index + 1);
            temp.push(char);
        } else {
            temp.push(char);
        }
    });
    return Math.max(max, temp.length);
};

module.exports = {
    lengthOfLongestSubstring
};
