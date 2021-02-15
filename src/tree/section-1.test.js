const {
    sortedArrayToBST, maxDepth, rangeSumBST, kthLargest, lowestCommonAncestor,
    leafSimilar, isSameTree, isCousins, getAllElements, removeLeafNodes, kthSmallest,
    FindElements, insertIntoBST, pathInZigZagTree, lcaDeepestLeaves, sumNumbers,
    pseudoPalindromicPaths, convertBST, mctFromLeafValues, findRedundantConnection,
    CBTInserter, levelOrder, rob, printTree, path_sum, zigzagLevelOrder
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


let tree14 = { val: 9 }
let tree14_1 = {
    val: 2,
    left: {val:3, left: {val: 3,}, right: {val: 1}},
    right: {val: 1, right: {val: 1}}
}
let tree14_2 = {
    val: 2,
    left: {val: 1, left: {val: 1}, right: {val: 3, right: {val: 1}}},
    right: {val: 1}
}


test("pseudo palindromic paths", () => {
    expect(pseudoPalindromicPaths(tree14)).toEqual(1)
    expect(pseudoPalindromicPaths(tree14_1)).toEqual(2)
    expect(pseudoPalindromicPaths(tree14_2)).toEqual(1)
})

let tree15 = {
    val: 4,
    left: {val: 1, left: {val: 0}, right: {val: 2, right: {val: 3}}},
    right: {val: 6, left: {val: 5}, right: {val: 7, right: {val: 8}}}
}

test("convert bst", () => {
    console.log(convertBST(tree15))
})

test("mct from array", () => {
    // expect(mctFromLeafValues([6,2,4])).toEqual(32)
    // expect(mctFromLeafValues([7,12,8,10])).toEqual(284)
    expect(mctFromLeafValues([15,13,3,4,2,8,3,11,3,3,9,14,2,6,4,12,1,14])).toEqual(1318)
})

test("find redundant connection", () => {
    expect(findRedundantConnection([[1,5],[3,4],[3,5],[4,5],[2,4]])).toEqual([4, 5])
})

let tree16 = {
    val: 1,
    left: {val: 2, left: {val: 4}, right: {val: 5}},
    right: {val: 3, left: {val: 6}}
}
let tree17 = { val: 1 }
test("complete binary tree insert", () => {
    // let cbt = new CBTInserter(tree16);
    // expect(cbt.insert(7)).toEqual(3)
    // expect(cbt.insert(8)).toEqual(4)
    // console.log(cbt.get_root())
    let cbt1 = new CBTInserter(tree17);
    expect(cbt1.insert(2)).toEqual(1)
    expect(cbt1.insert(3)).toEqual(1)
    expect(cbt1.insert(4)).toEqual(2)
    expect(cbt1.insert(5)).toEqual(2)
    console.log(cbt1.get_root())
})

let tree18 = {val: 3, left: {val: 9}, right: {val: 20, left: {val: 15}, right: {val: 7}}}

test("level order", () => {
    console.log(levelOrder(tree18))
    expect(levelOrder(tree18)).toEqual([[3],[20,9],[15,7]])
})

let tree19 = {val: 3, left: {val: 2, right: {val: 3}}, right: {val: 3, right: {val: 1}}}
let tree20 = {
    val: 3,
    left: { val: 4, left: {val: 1}, right: {val: 3} },
    right: {val: 5, right: {val: 1}}
}
let tree21 = {val: 2, left: {val: 1, right: {val: 4}}, right: {val: 3}}

test("rob III", () => {
    expect(rob(tree19)).toBe(7)
    expect(rob(tree20)).toBe(9)
    expect(rob(tree21)).toBe(7)
})

let tree22 = {val: 1, left: {val: 2}}
let tree23 = { val: 1, left: {val: 2, right: {val: 4}}, right: {val: 3}}
let tree24 = {val: 1, left: {val: 2, left: {val: 3, left: {val: 4}}}, right: {val: 5}}
let tree25 = {val: 5, left: {val: 3, left: {val: 2}, right: {val: 4}}, right: {val: 6, right: {val: 7}}}

test("print tree", () => {
    expect(printTree(tree22)).toEqual([["", "1", ""], ["2", "", ""]])
    expect(printTree(tree23)).toEqual([["", "", "", "1", "", "", ""], ["", "2", "", "", "", "3", ""], ["", "", "4", "", "", "", ""]])
    expect(printTree(tree24)).toEqual([["",  "",  "", "",  "", "", "", "1", "",  "",  "",  "",  "", "", ""],["",  "",  "", "2", "", "", "", "",  "",  "",  "",  "5", "", "", ""],["",  "3", "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""],["4", "",  "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]])
    expect(printTree(tree25)).toEqual([["","","","5","","",""],["","3","","","","6",""],["2","","4","","","","7"]])
})


let tree26 = {
    val: 5,
    left: {
        val: 4,
        left: { val: 11, left: {val: 7}, right: {val: 2} }
    },
    right: {
        val: 8,
        left: {val: 13},
        right: {val: 4, left: {val: 5}, right: {val: 1}}
    }
}

test("path sum", () => {
    expect(path_sum(tree26, 22)).toEqual([[5, 4, 11, 2], [5, 8, 4, 5]])
})

let tree27 = { val: 3, left: {val: 9}, right: {val: 20, left: {val: 15}, right: {val: 7}}}

test("zigzag level order", () => {
    expect(zigzagLevelOrder(tree27)).toEqual([[3], [20, 9], [15, 7]])
})
