/**
 * Min Stack
 * https://leetcode.com/problems/min-stack/
 *
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
 *
 *   push(x) -- Push element x onto stack.
 *   pop() -- Removes the element on top of the stack.
 *   top() -- Get the top element.
 *   getMin() -- Retrieve the minimum element in the stack.
 *
 * Example:
 *
 *   MinStack minStack = new MinStack();
 *   minStack.push(-2);
 *   minStack.push(0);
 *   minStack.push(-3);
 *   minStack.getMin();   --> Returns -3.
 *   minStack.pop();
 *   minStack.top();      --> Returns 0.
 *   minStack.getMin();   --> Returns -2.
 */

/**
 * initialize your data structure here.
 */
class MinStack {
    constructor() {
        this.list = [];
        this.length = 0;
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.list.push(x);
        this.length++;
    }

    /**
     * @return {void}
     */
    pop() {
        this.list.pop();
        this.length--;
    }

    /**
     * @return {number}
     */
    top() {
        return this.list[this.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return Math.min(...this.list);
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

module.exports = {
    MinStack
};
