const { recur, iterate } = require('./reverse-linked-list');
const { array2LinkedList } = require('../../utils/helper');

test("reverse linked list in recur", () => {
    expect(recur(array2LinkedList([1, 2, 3, 4, 5]))).toEqual(array2LinkedList([5, 4, 3, 2, 1]));
    expect(recur(array2LinkedList([2, 7, 9, 3, 1]))).toEqual(array2LinkedList([1, 3, 9, 7, 2]));
});


test("reverse linked list in iteratee", () => {
    expect(iterate(array2LinkedList([1, 2, 3, 4, 5]))).toEqual(array2LinkedList([5, 4, 3, 2, 1]));
    expect(iterate(array2LinkedList([2, 7, 9, 3, 1]))).toEqual(array2LinkedList([1, 3, 9, 7, 2]));
});
