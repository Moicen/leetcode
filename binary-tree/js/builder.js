const read = require('../../utils/arg').read;


class TreeNode {
    constructor(val, left, right) {
        this.left = left;
        this.right = right;
        this.val = val;
    }
}

const randomValue = (depth) => Math.ceil(Math.random() * depth * 10);

const build = (depth, cursor = 0) => {
    if (cursor >= depth) return null;
    if (cursor >= 1 && Math.random() > 0.5) return null;
    return new TreeNode(randomValue(cursor), build(depth, cursor + 1), build(depth, cursor + 1));
};

const generate = () => {
    let {depth} = read();
    return build(depth || 3);
};

module.exports = generate;


