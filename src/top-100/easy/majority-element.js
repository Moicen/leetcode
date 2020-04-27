/**
 * Majority Element
 * https://leetcode.com/problems/majority-element/
 *
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 * You may assume that the array is non-empty and the majority element always exist in the array.
 *  Example 1:
 *
 *   Input: [3,2,3]
 *   Output: 3
 *   Example 2:
 *
 *   Input: [2,2,1,1,1,2,2]
 *   Output: 2
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
    const map = {}, len = nums.length;
    for (let i = 0; i < len; i++) {
        let n = nums[i];
        map[n] = (map[n] || 0) + 1;
        if (map[n] > len / 2) {
            return n;
        }
    }
    return undefined;
};

module.exports = {
    majorityElement
};
