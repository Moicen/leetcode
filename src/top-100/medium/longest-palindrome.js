/**
 * Longest Palindromic Substring
 * https://leetcode.com/problems/longest-palindromic-substring/
 *
 * Given a string s, find the longest palindromic substring in s.
 * You may assume that the maximum length of s is 1000.
 *
 *  Example 1:
 *    Input: "babad"
 *    Output: "bab"
 *    Note: "aba" is also a valid answer.
 *
 *  Example 2:
 *    Input: "cbbd"
 *    Output: "bb"
 *
 *
 * 思路：
 * 1. 回文字符串特征：从中间往两边，每个对应位置字符相同
 * 2. 把某个字符作为中间字符，分别往两边扩散，直到字符串头或尾部，找符合回文特征的最长字符集，则是这个字符下的解
 * 3. 将字符串循环，对每个字符都求一个以其为中心的最长回文解
 * 4. 回文字符串可以是奇数个或偶数个，两种需要分别查询，单独一种循环都可能有遗漏
 * 5. 所有循环结束，取最长的回文字符串，就是最终解
 */

const palindromic = (chars, i, j) => {
    let start = 0, end = 0;
    for (; i >= 0, j < chars.length; i--, j++) {
        if (chars[i] !== chars[j]) break;
        start = i;
        end = j;
    }
    return [start, end];
};

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
    if (s.length < 2) return s;

    let chars = s.split('');
    let startIndex = 0, endIndex = 0;

    for (let i = 0; i < chars.length; i++) {
        let [start1, end1] = palindromic(chars, i, i);
        if (end1 - start1 + 1 > endIndex - startIndex) {
            startIndex = start1;
            endIndex = end1;
        }
        let [start2, end2] = palindromic(chars, i, i + 1);
        if (end2 - start2 + 1 > endIndex - startIndex) {
            startIndex = start2;
            endIndex = end2;
        }
    }
    return chars.slice(startIndex, endIndex + 1).join('');
};

module.exports = {
    longestPalindrome
};
