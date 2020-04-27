const { hasCycle } = require('./linked-list-circle');
const { array2LinkedList } = require('../../utils/helper');


test("Linked list has circle", () => {
    let linkedList1 = array2LinkedList([3, 2, 0, -4], 1);
    expect(hasCycle(linkedList1)).toBeTruthy();

    let linkedList2 = array2LinkedList([1, 2], 0);
    expect(hasCycle(linkedList2)).toBeTruthy();

    let linkedList3 = array2LinkedList([1], -1);
    expect(hasCycle(linkedList3)).toBeFalsy();

    let linkedList4 = array2LinkedList([-21, 10, 17, 8, 4, 26, 5, 35, 33, -7, -16, 27, -12, 6, 29, -12, 5, 9, 20, 14, 14, 2, 13, -24, 21, 23, -21, 5], -1);
    expect(hasCycle(linkedList4)).toBeFalsy();
});
