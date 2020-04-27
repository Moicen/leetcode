const { isPalindrome } = require('./palindrome-linked-list');
const { array2LinkedList } = require('../../utils/helper');


test("Is palindrome linked list", () => {
    expect(isPalindrome(array2LinkedList([1, 2, 3]))).toBeFalsy();
    expect(isPalindrome(array2LinkedList([1, 2, 3, 2, 1]))).toBeTruthy();
});
