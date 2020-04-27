const { removeNthFromEnd } = require("./remove-nth-node-from-end");


const ListNode1 = {
    val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5 } } } }
};
const ListNode2 = {
    val: 1, next: { val: 2, next: { val: 3, next: { val: 5 } } }
};

test("Remove Nth Node From End of List", () => {
    expect(removeNthFromEnd(ListNode1, 2)).toEqual(ListNode2);
    expect(removeNthFromEnd({ val: 1 }, 1)).toEqual(null);
    expect(removeNthFromEnd({ val: 1, next: { val: 2 } }, 1)).toEqual({ val: 1, next: null });
    expect(removeNthFromEnd({ val: 1, next: { val: 2, next: null } }, 2)).toEqual({ val: 2, next: null });
});
