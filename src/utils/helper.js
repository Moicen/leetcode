const array2LinkedList = (nums, index) => {
    let node = null, head = null, circle = null;
    nums.forEach((num, idx) => {
        let next = { val: num, next: null };
        if (node) {
            node.next = next;
        } else {
            head = next;
        }
        node = next;
        if (idx === index) {
            circle = node;
        }
    });
    node.next = circle;
    return head;
};

module.exports = {
    array2LinkedList
};
