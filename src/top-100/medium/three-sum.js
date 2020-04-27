/**
 * 3Sum
 * https://leetcode.com/problems/3sum/
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0?
 * Find all unique triplets in the array which gives the sum of zero.
 *
 * Note:
 *
 *  The solution set must not contain duplicate triplets.
 *
 * Example:
 *
 *  Given array nums = [-1, 0, 1, 2, -1, -4],
 *
 *   A solution set is:
 *   [
 *      [-1, 0, 1],
 *      [-1, -1, 2]
 *   ]
 *
 * 思路：
 *      先将数组排序，这样在循环时可以从两边同时往中间夹推，减少循环次数
 *      先固定一个元素，那么问题就变成了twoSum问题，对剩余元素求twoSum
 *      排序后的数组，如果循环时遇到相同的元素，可以直接跳过，以此排除重复结果
 *
 */

const twoSum = (nums, sum) => {
    let result = [], i = 0, j = nums.length - 1;
    while (i < j) {
        let low = nums[i], high = nums[j];
        let tmp = low + high;
        if (tmp < sum) i++;
        else if (tmp > sum) j--;
        else {
            result.push([low, high]);
            // 跳过相同元素，排除重复结果
            while (i < j && nums[i + 1] === low) i++;
            while (i < j && nums[j - 1] === high) j--;
            i++;
            j--;
        }
    }

    return result;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
    nums.sort((x, y) => x - y);
    let cursor = 0, triplets = [];
    while (cursor < nums.length - 2) {
        let fixed = nums[cursor];
        // 如果数字相同，跳过
        if (fixed !== nums[cursor - 1]) {
            let sum = -fixed, arr = nums.slice(cursor + 1);
            let result = twoSum(arr, sum);
            triplets = [...triplets, ...result.map(x => [fixed, ...x])];
        }
        cursor++;
    }
    return triplets;
};

module.exports = {
    threeSum
};
