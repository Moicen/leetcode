/**
 * Letter Combinations of a Phone Number
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 *
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
 *
 * A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 *
 *   Note: You may not slant the container and n is at least 2.
 *
 * Example:
 *
 *  Input: "23"
 *  Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 *
 * 思路：
 *      先取出所有数字对应的字母集合数组（一个二维数组）
 *      对数组做reduce，循环将所有组合保存
 *
 */

const DigitLetterMap = [
    , , ["a", "b", "c"], ["d", "e", "f"],
    ["g", "h", "i"], ["j", "k", "l"], ["m", "n", "o"],
    ["p", "q", "r", "s"], ["t", "u", "v"], ["w", "x", "y", "z"]
];

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
    let nums = digits.split('');
    let letters = nums.map(n => DigitLetterMap[Number(n)]);
    return letters.reduce((acc, cur) => {
        if (!acc.length) return cur;
        let result = [];
        acc.forEach(x => {
            cur.forEach(y => {
                result.push(x + y);
            });
        });
        return result;
    }, []);
};

module.exports = {
    letterCombinations
};
