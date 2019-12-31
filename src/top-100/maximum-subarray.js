/**
 * Maximum Subarray
 * https://leetcode.com/problems/maximum-subarray/
 *
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 *
 *
 * Example:
 *
 *  Input: [-2,1,-3,4,-1,2,1,-5,4],
 *  Output: 6
 *  Explanation: [4,-1,2,1] has the largest sum = 6.
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
    let maxSum = -Infinity, length = 0;
    while (length <= nums.length) {
        for (let i = 0; i <= nums.length - length; i++) {
            let subarray = nums.slice(i, i + length);
            if (subarray.length > 0) {
                let sum = subarray.reduce((a, c) => a + c);
                if (sum > maxSum) maxSum = sum;
            }
        }
        length++;
    }
    return maxSum;
};


const loop = (nums, maxSum) => {
    // console.log('------------------loop nums: ', JSON.stringify(nums))
    // console.log('------max sum: ', maxSum)
    // step 1: trim all negative numbers in head
    let num = nums.shift();
    while (num <= 0 && nums.length) {
        num = nums.shift();
    }
    nums.unshift(num);
    // console.log("left trimmed: ", nums);
    // step 2: trim all negative numbers in tail
    num = nums.pop();
    while (num <= 0 && nums.length) {
        num = nums.pop();
    }
    nums.push(num);
    // console.log("right trimmed: ", nums);

    let left = 0, n = nums.shift(), right = 0;
    // step 3: sum left nums
    while (n !== undefined && n >= 0) {
        left += n;
        n = nums.shift()
    }
    if (n !== undefined) nums.unshift(n);
    if (left) nums.unshift(left);
    // console.log('left added: ', nums);
    maxSum.value = Math.max(left, maxSum.value)

    if (n !== undefined) {
        // console.log("// n must be < 0: ", n);
        if (left + n > 0) {
            nums = [left + n, ...nums.slice(2)]
        } else {
            nums = nums.slice(2);
        }
    }
    // console.log("left calc nums: ", nums);
    // step 4: sum right nums
    n = nums.pop();
    while (n !== undefined && n >= 0) {
        right += n;
        n = nums.pop();
    }
    if (n !== undefined) nums.push(n);
    if (right) nums.push(right);
    maxSum.value = Math.max(right, maxSum.value)
    if (n !== undefined) {
        // console.log("// n must be < 0: ", n);
        if (right + n > 0) {
            nums = [...nums.slice(0, nums.length - 2), right + n];
        } else {
            nums = nums.slice(0, nums.length - 2);
        }
    }
    // console.log("right calc nums: ", nums);

    // console.log("current loop final nums: ", nums);
    return nums;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
const narrowWay = (nums) => {
    // console.log("input numbers: ", nums);
    if (nums.every(n => n <= 0)) return nums.reduce((p, c) => Math.max(p, c));
    const maxSum = {value: -Infinity}
    while (nums.length > 1) {
        nums = loop(nums, maxSum);
    }
    return Math.max(nums[0], maxSum.value);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const dynamicProgramming = (nums) => {
    let current = 0, max = -Infinity;
    nums.forEach(num => {
        current = Math.max(current + num, num)
        max = Math.max(max, current);
    });
    return max;
};

module.exports = {
    maxSubArray,
    narrowWay,
    dynamicProgramming
};
