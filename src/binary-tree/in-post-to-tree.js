/**
 * Construct Binary Tree from Inorder and Postorder Traversal
 * https://leetcode.com/explore/learn/card/data-structure-tree/133/conclusion/942/
 *
 */

/**
 * 根据中序和后序遍历结果构建树
 * 中序：left -> root -> right
 * 后序：left -> right -> root
 * 后序列表最后一个元素为root，中序root在右之间
 * 以此可以分别得到左右子树的中序和后序输出
 * 对左右子树递归
 * @param inOrderList
 * @param postOrderList
 */
const recur = (inOrderList, postOrderList) => {
    let root = postOrderList[postOrderList.length - 1];
    if (!root) return;
    let index = inOrderList.findIndex(x => x.val === root.val);
    let leftInOrderList = inOrderList.slice(0, index),
        rightInOrderList = inOrderList.slice(index + 1);

    let total = postOrderList.length;
    let leftPostOrderList = postOrderList.slice(0, total - rightInOrderList.length - 1),
        rightPostOrderList = postOrderList.slice(leftInOrderList.length, total - 1);
    root.left = leftPostOrderList[leftPostOrderList.length - 1] || null;
    root.right = rightPostOrderList[rightPostOrderList.length - 1] || null;
    recur(leftInOrderList, leftPostOrderList);
    recur(rightInOrderList, rightPostOrderList);
};

const recurWalk = (inValues, postValues) => {
    let inOrderList = inValues.map(x => ({val: x}));
    let postOrderList = postValues.map(x => ({val: x}));
    recur(inOrderList, postOrderList);
    return postOrderList[postOrderList.length - 1] || null;
};

const iterate = (inOrderList, postOrderList) => {
    const stack = [{inOrderList, postOrderList}];
    while (stack.length) {
        let {inOrderList, postOrderList} = stack.pop();
        let root = postOrderList[postOrderList.length - 1];
        if (!root) continue;
        let index = inOrderList.findIndex(x => x.val === root.val);
        let leftInOrderList = inOrderList.slice(0, index),
            rightInOrderList = inOrderList.slice(index + 1);

        let total = postOrderList.length;
        let leftPostOrderList = postOrderList.slice(0, total - rightInOrderList.length - 1),
            rightPostOrderList = postOrderList.slice(leftInOrderList.length, total - 1);
        root.left = leftPostOrderList[leftPostOrderList.length - 1] || null;
        root.right = rightPostOrderList[rightPostOrderList.length - 1] || null;
        stack.push({inOrderList: leftInOrderList, postOrderList: leftPostOrderList})
        stack.push({inOrderList: rightInOrderList, postOrderList: rightPostOrderList})
    }
};

const iterateWalk = (inValues, postValues) => {
    let inOrderList = inValues.map(x => ({val: x}));
    let postOrderList = postValues.map(x => ({val: x}));
    iterate(inOrderList, postOrderList);
    return postOrderList[postOrderList.length - 1] || null;
};

module.exports = {
    recurWalk, iterateWalk
};
