/**
 * Climbing Stairs
 * https://leetcode.com/problems/climbing-stairs/
 *
 * You are climbing a stair case. It takes n steps to reach to the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * Note: Given n will be a positive integer.
 *
 *   Example 1:
 *
 *   Input: 2
 *   Output: 2
 *   Explanation: There are two ways to climb to the top.
 *   1. 1 step + 1 step
 *   2. 2 steps
 *   Example 2:
 *
 *   Input: 3
 *   Output: 3
 *   Explanation: There are three ways to climb to the top.
 *   1. 1 step + 1 step + 1 step
 *   2. 1 step + 2 steps
 *   3. 2 steps + 1 step
 *
 */

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
    let counter = [0, 1, 2];
    for (let i = 3; i <= n; i++) {
        counter[i] = counter[i - 1] + counter[i - 2];
    }
    return counter[n];
};


module.exports = {
    climbStairs
};