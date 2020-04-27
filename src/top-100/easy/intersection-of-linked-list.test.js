const { getIntersectionNode } = require('./intersection-of-linked-list');


test("Intersection of linked list", () => {
    const A = { val: 5, next: null }, B = { val: 4, next: A }, C = { val: 8, next: B };
    const D = { val: 1, next: C }, E = { val: 4, next: D };
    const F = { val: 1, next: C }, G = { val: 0, next: F }, H = { val: 5, next: G };
    expect(getIntersectionNode(E, H)).toBe(C);
});
