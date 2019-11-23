const run = require("./runner");

const PreOrderOutput = [3, 9, 20, 15, 7];
const InOrderOutput = [9, 3, 15, 20, 7];

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


run([
    {
        desc: 'Construct tree from in order and post order result with recur: ',
        exec: () => recurWalk(PreOrderOutput, InOrderOutput)
    },
    {
        desc: 'Construct tree from in order and post order result with iterate: ',
        exec: () => iterateWalk(PreOrderOutput, InOrderOutput)
    }
]);
