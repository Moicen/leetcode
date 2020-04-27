/**
 * Container With Most Water
 * https://leetcode.com/problems/container-with-most-water/
 *
 * Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
 * n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0).
 * Find two lines, which together with x-axis forms a container, such that the container contains the most water.
 *
 *   Note: You may not slant the container and n is at least 2.
 *
 * Example:
 *
 *  Input: [1,8,6,2,5,4,8,3,7]
 *  Output: 49
 *
 * 思路：
 *     计算所有情况并取最大值，不过可以在省略掉一些明显不需要的计算。
 *     体积是底宽*高度，最大低宽就是从第一个到最后一个。此时体积取决于最低的那条线。
 *     从两边往中间推进，显然是先去掉当前较低的那条线，然后再计算体积，并与之前的比较取最大值
 *     循环到中间，结束。
 */


/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
    let i = 0, j = height.length - 1;
    let volume = 0;
    while (i < j) {
        volume = Math.max(volume, (j - i) * Math.min(height[i], height[j]));
        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }
    return volume;
};

module.exports = {
    maxArea
};
