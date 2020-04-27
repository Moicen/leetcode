/**
 * Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 *
 * Given a string, find the length of the longest substring without repeating characters.
 *
 *  Example 1:
 *    Input: "abcabcbb"
 *    Output: 3
 *    Explanation: The answer is "abc", with the length of 3.
 *
 *  Example 2:
 *    Input: "bbbbb"
 *    Output: 1
 *    Explanation: The answer is "b", with the length of 1.
 *
 *  Example 3:
 *    Input: "pwwkew"
 *    Output: 3
 *    Explanation: The answer is "wke", with the length of 3.
 *
 * Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 *
 */
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    if (!s) return 0;
    let chars = s.split(''), sub = [], max = 0;
    chars.forEach(char => {
        let i = sub.indexOf(char);
        if (i < 0) {
            sub.push(char);
        } else {
            max = Math.max(max, sub.length);
            sub = sub.slice(i + 1);
            sub.push(char);
        }
    });
    return Math.max(max, sub.length);
};

module.exports = {
    lengthOfLongestSubstring
};
