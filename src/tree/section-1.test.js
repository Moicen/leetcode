const {
    sortedArrayToBST, maxDepth, rangeSumBST, kthLargest, lowestCommonAncestor,
    leafSimilar, isSameTree, isCousins, getAllElements, removeLeafNodes, kthSmallest,
    FindElements, insertIntoBST, pathInZigZagTree, lcaDeepestLeaves, sumNumbers
} = require('./section-1')


test("heights", () => {
    console.log(sortedArrayToBST([-10,-3,0,5,9]))
    // expect(sortedArrayToBST([-10,-3,0,5,9])).toBe(321);
});

test("max depth", () => {
    expect(maxDepth(null)).toBe(0)
});


let tree1 = {
    val: 10,
    left: {
        val: 5,
        left: {val: 3, left: {val: 1} },
        right: {val: 7, left: {val: 6} }
    },
    right: {
        val: 15, left: {val: 13}, right: {val: 18}
    }
}

test("range sum of bst", () => {
    expect(rangeSumBST(tree1, 6, 10)).toBe(23)
});

let tree2 = {
    val: 3, left: {val: 1, right: {val: 2}}, right: {val: 4}
}

test("kth largest", () => {
    expect(kthLargest(tree2, 1)).toEqual({val: 4})
});

let tree3 = {
    val: 6,
    left: {val: 2, left: {val: 0}, right: {val: 4, left: {val: 3}, right: {val: 5}}},
    right: {val: 8, left: {val: 7}, right: {val: 9}}
}

test("lowest common ancestor", () => {
    console.log(lowestCommonAncestor(tree3, {val: 2}, {val: 8}))
});

let tree4_1 = {
    val: 3,
    left: {val: 5, left: {val: 6}, right: {val: 2, left: {val: 7}, right: {val: 4}}},
    right: {val: 1, left: {val: 9}, right: {val: 8}}
}
let tree4_2 = {
    val: 3,
    left: {val: 5, left: {val: 6}, right: {val: 7}},
    right: {val: 1, left: {val: 4}, right: {val: 2, left: {val: 9}, right: {val: 8}}}
}

let tree4_3 = {
    val: 3, left: { val: 5}
}

test("leaf similar", () => {
    expect(leafSimilar(tree4_1, tree4_2)).toBeTruthy();
    expect(leafSimilar())
});

test("is same tree", () => {
    expect(isSameTree(null, {val: 0})).toBeFalsy()
})

let tree5 = {
    val: 1,
    left: {val: 2, right: {val: 4}},
    right: {val: 3, right: {val: 5}}
}

test("is cousins", () => {
    expect(isCousins(tree5, 4, 5)).toBeTruthy()
})

let tree6_1 = {
    val: 2, left: {val: 1}, right: {val: 4}
}
let tree6_2 = {
    val: 1, left: {val: 0}, right: {val: 3}
}
test("get all elements", () => {
    expect(getAllElements(tree6_1, tree6_2)).toEqual([0,1,1,2,3,4])
})

let tree7 = {
    val: 1, left:{ val: 2, left: {val: 2}},
    right: {val: 3, left: {val: 2}, right: {val: 4}}
}

test("remove leaft nodes", () => {
    console.log(removeLeafNodes(tree7, 2))
})

let tree8 = {
    val: 5, left: {val: 3, left: {val: 2, left: {val: 1}}, right: {val: 4}},
    right: {val: 6}
}

test("find kth smallest", () => {
    expect(kthSmallest(tree8, 3)).toEqual(3)
})

let tree9 = {
    val: -1, left: {val: -1, left: {val: -1}, right: {val: -1}},
    right: {val: -1}
}

test("find elements", () => {
    let f = new FindElements(tree9)
    console.log(f.nums)
    expect(f.find(1)).toBeTruthy()
    expect(f.find(3)).toBeTruthy()
    expect(f.find(5)).toBeFalsy()
})

let tree10 = {
    val: 4,
    left: {val: 2, left: {val: 1}, right: { val: 3}},
    right: {val: 7}
}

test("insert bst", () => {
    let node = insertIntoBST(tree10, 5)
    console.log(node)
})

let tree11 = {
    val: 1,
    left: {
        val: 3,
        left: {
            val: 4,
            left: { val: 15, left: {val: 16}, right: {val: 17} },
            right: {val: 14, left: {val: 18}, right: {val: 19} }
        },
        right: {
            val: 5,
            left: { val: 13, left: {val: 20}, right: {val: 21} },
            right: {val: 12, left: {val: 22}, right: {val: 23} }
        }
    },
    right: {
        val: 2,
        left: {
            val: 6,
            left: { val: 11, left: {val: 24}, right: {val: 25} },
            right: {val: 10, left: {val: 26}, right: {val: 27} }
        },
        right: {
            val: 7,
            left: { val: 9, left: {val: 28}, right: {val: 29} },
            right: {val: 8, left: {val: 30}, right: {val: 31} }
        }
    }
}


test("path in zigzag tree", () => {
    expect(pathInZigZagTree(16)).toEqual([1, 3, 4, 15, 16])
})

let tree12 = {
    val: 3,
    left: {val: 5, left: {val: 6, right: {val: 2, left: {val: 7}, right: {val: 4}}}},
    right: {val: 1, left: {val: 0}, right: {val: 8}}
}

test("lowest common ancestor of deepest leaves", () => {

    console.log(lcaDeepestLeaves(tree12))
})

let tree13 = { val: 1, left: {val: 2}, right: {val: 3} }

test("sum numbers", () => {
    expect(sumNumbers(tree13)).toEqual(25)
})
