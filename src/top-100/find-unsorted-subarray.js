/**
 * Shortest Unsorted Continuous Subarray
 * https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
 *
 * Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order,
 * then the whole array will be sorted in ascending order, too.
 *
 * You need to find the shortest such subarray and output its length.
 *
 * Example 1:
 *  Input: [2, 6, 4, 8, 10, 9, 15]
 *  Output: 5
 *  Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
 *
 * Note:
 *  The length of the input array is in range [1, 10,000].
 *  The input array may contain duplicates, so ascending order here means <=.
 *
 * 思路：
 *   1. 从左向右遍历，找最大值，同时找索引靠后但是值比最大值小的，最后一个找到的是截止点
 *   2. 从右向左遍历，找最小值，同时找索引靠前但是值比最小值大的，最后一个找到的是起始点
 *   3. 如果遍历完了还没找到截止点和起始点（必然是同时存在或同时不存在），则说明数组已排列好，返回0
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const findUnsortedSubarray = function (nums) {
    let len = nums.length, start, end;
    let min = nums[len - 1], max = nums[0];
    for (let i = 0; i < len; i++) {
        min = Math.min(min, nums[len - 1 - i]);
        max = Math.max(max, nums[i]);
        if (nums[i] < max) {
            end = i
        }
        if (nums[len - 1 - i] > min) {
            start = len - 1 - i;
        }
    }
    if (start === undefined) {
        return 0;
    }

    return end - start + 1;
};

module.exports = {
    findUnsortedSubarray
};
