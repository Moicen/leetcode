/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


// 构造二叉搜索树
const buildTree = (nums) => {
    let mid = Math.floor(nums.length / 2);
    let val = nums[mid];
    if (val === undefined) return null;
    let lefts = nums.slice(0, mid),
        rights = nums.slice(mid + 1);
    return {
        val,
        left: buildTree(lefts),
        right: buildTree(rights)
    };
};


/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    return buildTree(nums);
};



let maxH = 0;

const traverse = (node, height) => {
    if(!node) {
        maxH = Math.max(height, maxH)
        return
    }
    traverse(node.left, height + 1)
    traverse(node.right, height + 1)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    traverse(root, 0)
    return maxH;
};


let sum = 0

const traverse_2 = (node, low, high) => {
    if(!node) return;
    if(node.val > high){
        traverse_2(node.left, low, high)
        return;
    }
    if(node.val < low) {
        traverse_2(node.right, low, high)
        return;
    }
    sum += node.val;
    traverse_2(node.left, low, high)
    traverse_2(node.right, low, high)
}


/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    sum = 0
    traverse_2(root, low, high)
    return sum;
};


let nodes = []

const traverse_3 = (node, k) => {
    if(!node) return null;
    let re = traverse_3(node.right,  k)
    if(re) return re;
    nodes.push(node)
    if(nodes.length === k) return node
    return traverse_3(node.left, k)
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
    nodes = [];
    return traverse_3(root, k);
};

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    console.log(root)
    if(!root) return null;
    // 1. root 为 p or q
    if(root.val === p.val || root.val === q.val){
        return root;
    }
    // 2. 检查root的子节点
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q)

    // 2.1 如果left、right都有值，那就正好是p和q
    // 当前节点即为最近公共祖先
    if(left && right) return root;

    return left || right
};

const leafSimilarTraverse = (root) => {
    if(!root) return;

    if(!root.left && !root.right) {
        leafs.push(root.val)
        return;
    }
    traverse(root.left, leafs)
    traverse(root.right, leafs)
}

const leafSimilar = (root1, root2) => {
    let leafs1 = [], leafs2 = [];
    traverse(root1, leafs1);
    traverse(root2, leafs2)
    console.log(leafs1, leafs2)
    return leafs1.join('') === leafs2.join('')
}

const isSameTree = function(p, q) {
    if(!p && !q) return true;
    if(!p || !q) return false;

    if(p.val !== q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

var isCousins = function(root, x, y) {
    let depthX = 0, depthY = 0
    let parentX = null, parentY = null;

    const recur = (node, depth, x, y, parent) => {
        if(!node) return;

        if(node.val ===x) {
            console.log('depth X..', depth)
            depthX = depth
            parentX = parent
            return
        }
        if(node.val === y) {
            console.log('depth Y..', depth)
            depthY = depth
            parentY = parent
            return
        }

        recur(node.left, depth + 1, x, y, node)
        recur(node.right, depth + 1, x, y, node)
    }
    recur(root, 0, x, y, null)
    console.log(depthX, parentX)
    console.log(depthY, parentY)
    return depthY === depthX && parentX !== parentY
};

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
const getAllElements = function(root1, root2) {


    const inorder = (node, nums) => {
        if(!node) return;
        inorder(node.left, nums)
        nums.push(node.val)
        inorder(node.right, nums)
    }
    let nums1 = [], nums2 = []
    inorder(root1, nums1)
    inorder(root2, nums2)
    if(!nums1.length) return nums2;
    if(!nums2.length) return nums1;
    let result = [], i = 0, j = 0;
    while (i < nums1.length && j < nums2.length) {
        while(nums1[i] <= nums2[j]) {
            result.push(nums1[i])
            i++
        }
        while(nums1[i] > nums2[j]) {
            result.push(nums2[j])
            j++
        }
    }
    if(i < nums1.length) result.push(...nums1.slice(i))
    if(j < nums2.length) result.push(...nums2.slice(j))
    return result;
};

/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) {


    const recur = (node) => {
        if(!node) return true;
        console.log(node.val)
        let leftNull = recur(node.left);
        let rightNull = recur(node.right)
        if(leftNull) node.left = null;
        if(rightNull) node.right = null;
        return !node.left && !node.right && node.val === target;

    }

    let rootNull = recur(root)
    return rootNull ? null : root
};
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let nums = []

    const recur = (node) => {
        if(!node || nums.length >= k) return;

        if(node.left) recur(node.left)
        nums.push(node.val)
        if(node.right) recur(node.right)
    }

    recur(root)
    return nums[k - 1];
};

var FindElements = function(root) {
    this.nums = []
    if(!root) return;
    root.val = 0;
    let queue = [root];

    while(queue.length){
        let len = queue.length;
        while(len){
            let node = queue.shift()
            this.nums.push(node.val)
            if(node.left) {
                node.left.val = 2 * node.val + 1
                queue.push(node.left)
            }
            if(node.right) {
                node.right.val = 2 * node.val + 2
                queue.push(node.right)
            }
            len--
        }
    }
};

/**
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
    return this.nums[target] !== undefined;
};


var insertIntoBST = function(root, val) {

    let left = null, right = null;
    const recur = (node, target) => {
        if(!node) return;
        if(node.val > target) {
            right = node;
            recur(node.left, target)
        }
        if(node.val < target) {
            left = node;
            recur(node.right, target)
        }

    }

    recur(root, val);
    console.log('left...', left)
    console.log('right...', right)
    let node = { val, left: null, right: null };
    if(!left && !right) return node;
    if(left && !left.right) left.right = node
    if(right && !right.left) right.left = node

    return root;


};

/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function(label) {

    let line = Math.floor(Math.log2(label)) + 1;

    let nums = []
    while(line > 0){
        nums.push(label)
        let max = Math.pow(2, line) - 1,
            min = Math.pow(2, line -1);
        label = Math.floor((max + min - label) / 2)
        line--
    }
    return nums.reverse();
};

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function(root) {


    let maxDepth = 0, deepestNodes = [];

    const recur = (node, depth) => {
        if(!node) return;

        if(depth > maxDepth) {
            maxDepth = depth;
            deepestNodes = [node]
        } else if(depth === maxDepth) {
            deepestNodes.push(node)
        }

        recur(node.left, depth + 1)
        recur(node.right, depth + 1)
    }

    recur(root, 0)

    console.log(maxDepth, deepestNodes)

    const lca = (node, p, q) => {
        if(!node) return null;
        if(!p || !q) return p || q;

        if(node.val === p.val || node.val === q.val) {
            return node;
        }
        let left = lca(node.left, p, q)
        let right = lca(node.right, p, q)

        if(left && right) return node;
        return left || right;
    }

    return deepestNodes.reduce((a, c) => {
        console.log(a, c)
        let ancestor = lca(root, a, c)
        return ancestor;
    }, null)

};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {

    let nums = [], sum = 0;

    const recur = (node) => {
        if(!node) return;
        console.log(nums)
        nums.push(node.val);
        if(!node.left && !node.right) {
            sum += Number.parseInt(nums.join(''), 10)
            nums.pop()
            return ;
        }
        recur(node.left)
        recur(node.right)

        nums.pop()
    }
    recur(root)
    return sum;
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var pseudoPalindromicPaths  = function(root) {

    const paths = []

    const recur = (node, path) => {
        if(!node) return ;

        path.push(node.val)

        if(!node.left && !node.right) {
            paths.push([...path])
        } else {
            recur(node.left, path)
            recur(node.right, path)
        }

        path.pop()
    }

    recur(root, [])
    console.log(paths)

    let count = 0;

    paths.forEach(path => {
        let hash = new Map()
        path.forEach(val => {
            hash.set(val, (hash.get(val) || 0) + 1)
        })

        let odds = 0
        hash.forEach((value) => {
            if(value % 2) odds++
        })
        if(odds <= 1) count++
    })

    return count;
};

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {


    const recur = (node, prevSum) => {
        if(!node) return 0;
        let cur = node.val + (recur(node.right, prevSum) || prevSum)
        let left = recur(node.left, cur)
        node.val = cur;
        return cur + left;
    }

    recur(root, 0)

    return root
};

/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function(arr) {

    if(arr.length < 2) return 0;

    let memo = {}
    const recur = (nums) => {
        let len = nums.length;
        if(!len) return { sum: 0, max: 0 }
        if(len === 1) return {sum: 0, max: nums[0]};
        if(len === 2) {
            let [first, last] = nums;
            return {sum: first * last, max: Math.max(first, last)}
        }
        let sum = Infinity, max = 0
        for(let i = 1; i < nums.length; i++) {
            let lefts = nums.slice(0, i);
            let rights = nums.slice(i);
            let lk = lefts.join('-'), rk = rights.join('-')
            let l = memo[lk] || recur(lefts),
                r = memo[rk] || recur(rights)
            memo[lk] = l;
            memo[rk] = r
            let s = l.sum + r.sum + l.max * r.max
            sum = Math.min(s, sum);
            max = Math.max(max, l.max, r.max)
        }
        return { sum, max }
    }

    return recur(arr).sum
};

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {

    let fa = [], index = -1;

    const upgrade = (f, children, plusOne = false) => {
        if(plusOne) f.depth++;
        f.children = [...new Set(children)]
        f.children.forEach(c => {
            fa[c] = f;
        })
    }

    for(let i = 0; i < edges.length; i++) {
        let [n1, n2] = edges[i];
        let f1 = fa[n1], f2 = fa[n2]
        console.log(n1, n2, f1, f2)
        if(!f1 && !f2) {
            fa[n1] = fa[n2] = { val: n1, depth: 1, children: [n1, n2] }
            continue;
        }

        if(f1 && f2) {
            if(f1.val === f2.val) {
                index = i;
                break;
            }
            upgrade(f1.depth < f2.depth ? f1 : f2, [...f1.children, ...f2.children], f1.depth === f2.depth)
            continue;
        }
        upgrade(f1 || f2, [...(f1 || f2).children, n1, n2], true)
    }

    return edges[index]
};

/**
 * @param {TreeNode} root
 */
var CBTInserter = function(root) {
    let nodes = []
    let queue = [root]
    while(queue.length){
        let len = queue.length;
        let row = []
        while(len--) {
            let node = queue.shift();
            row.push(node)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        nodes.push(row)
        if(nodes.length > 2) nodes.shift();
    }
    this.nodes = nodes;
    this.root = root;
};

/**
 * @param {number} v
 * @return {number}
 */
CBTInserter.prototype.insert = function(v) {
    let node = {val: v, left: null, right:null}
    let last1 = this.nodes.pop(), last2 = this.nodes.pop();
    let parent = null;
    if(!last2) {
        parent = this.root;
        parent.left = node;
        last2 = last1;
        last1 = [node];
    } else {
        // 最后一层已满
        if(last1.length === 2 * last2.length) {
            parent = last1[0];
            parent.left = node;
            last2 = last1;
            last1 = [node]
        } else {
            for(let i = 0; i < last2.length; i++){
                let n = last2[i]
                if(!n.left || !n.right) {
                    parent = n
                    break;
                }
            }
            if(!parent.left) parent.left = node;
            else if(!parent.right) parent.right = node;
            last1.push(node)
        }
    }


    this.nodes.push(last2, last1)
    return parent.val;
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function() {
    return this.root;
};

module.exports = {
    sortedArrayToBST, maxDepth, rangeSumBST, kthLargest, lowestCommonAncestor,
    leafSimilar, isSameTree, isCousins, getAllElements, removeLeafNodes, kthSmallest,
    FindElements, insertIntoBST, pathInZigZagTree, lcaDeepestLeaves, sumNumbers,
    pseudoPalindromicPaths, convertBST, mctFromLeafValues, findRedundantConnection,
    CBTInserter
};
