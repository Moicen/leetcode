/**
 * House Robber
 * https://leetcode.com/problems/house-robber/
 *
 * You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
 *
 * Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
 *
 * Example 1:
 *
 *   Input: [1,2,3,1]
 *   Output: 4
 *   Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
 *   Total amount you can rob = 1 + 3 = 4.
 * Example 2:
 *
 *   Input: [2,7,9,3,1]
 *   Output: 12
 *   Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
 *   Total amount you can rob = 2 + 9 + 1 = 12.
 */


/**
 * 递归方式
 * f(n) = Math.max(f(n - 2) + nums[n], f(n - 1))
 * @param {number[]} nums
 * @returns {number}
 */
const recur = (nums) => {
    let last = nums.pop();
    if (!nums.length) return last || 0;
    let prevs = nums.slice(0, nums.length - 1);
    return Math.max(recur(prevs) + last, recur(nums))
}

/**
 * 循环方式
 * cur = Math.max(prev2 + nums[n], prev1)
 * @param {number[]} nums
 * @returns {number}
 */
const iterate = (nums) => {

    let prev2 = 0, prev1 = 0, cur = 0;
    for(let i = 0; i < nums.length; i++){
        cur = Math.max(prev2 + nums[i], prev1);
        prev2 = prev1;
        prev1 = cur;
    }

    return cur;
}

/**
 * @param {number[]} nums
 * @return {number}
 *
 * 数组元素非空且全部大于0
 */
const rob = function (nums) {
    return iterate(nums);
};

module.exports = {
    recur,
    iterate
};
