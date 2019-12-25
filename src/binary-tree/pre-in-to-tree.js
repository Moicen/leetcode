/**
 * Construct Binary Tree from Preorder and Inorder Traversal
 * https://leetcode.com/explore/learn/card/data-structure-tree/133/conclusion/943/
 *
 */

/**
 * 根据前序和中序遍历结果构建树
 * 前序：root -> left -> right
 * 中序：left -> root -> right
 * 前序列表第一个元素为root，中序root在右之间
 * 以此可以分别得到左右子树的前序和中序输出
 * 对左右子树递归/循环
 * @param preOrderList
 * @param inOrderList
 */
const recur = (preOrderList, inOrderList) => {
    let root = preOrderList[0];
    if (!root) return;
    let index = inOrderList.findIndex(x => x.val === root.val);
    let leftInOrderList = inOrderList.slice(0, index),
        rightInOrderList = inOrderList.slice(index + 1);

    let leftPreOrderList = preOrderList.slice(1, leftInOrderList.length + 1),
        rightPreOrderList = preOrderList.slice(leftInOrderList.length + 1);
    root.left = leftPreOrderList[0] || null;
    root.right = rightPreOrderList[0] || null;
    recur(leftPreOrderList, leftInOrderList);
    recur(rightPreOrderList, rightInOrderList);
};

const recurWalk = (preValues, inValues) => {
    let preOrderList = preValues.map(x => ({val: x}));
    let inOrderList = inValues.map(x => ({val: x}));
    recur(preOrderList, inOrderList);
    return preOrderList[0] || null;
};

const iterate = (preOrderList, inOrderList) => {
    const stack = [{preOrderList, inOrderList}];
    while (stack.length) {
        let {preOrderList, inOrderList} = stack.pop();
        let root = preOrderList[0];
        if (!root) continue;
        let index = inOrderList.findIndex(x => x.val === root.val);
        let leftInOrderList = inOrderList.slice(0, index),
            rightInOrderList = inOrderList.slice(index + 1);

        let leftPreOrderList = preOrderList.slice(1, leftInOrderList.length + 1),
            rightPreOrderList = preOrderList.slice(leftInOrderList.length + 1);
        root.left = leftPreOrderList[0] || null;
        root.right = rightPreOrderList[0] || null;
        stack.push({preOrderList: leftPreOrderList, inOrderList: leftInOrderList});
        stack.push({preOrderList: rightPreOrderList, inOrderList: rightInOrderList});
    }
};

const iterateWalk = (preValues, inValues) => {
    let preOrderList = preValues.map(x => ({val: x}));
    let inOrderList = inValues.map(x => ({val: x}));
    iterate(preOrderList, inOrderList);
    return preOrderList[0] || null;
};

module.exports = {
    recurWalk, iterateWalk
};
