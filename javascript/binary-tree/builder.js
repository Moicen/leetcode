const read = require('../utils/arg').read;


class TreeNode {
    constructor(val, left, right) {
        this.left = left;
        this.right = right;
        this.val = val;
    }
}

const randomValue = (depth) => Math.ceil(Math.random() * depth * 10);

const build = (depth, values, cursor = 0) => {
    if (cursor >= depth) return null;
    if (cursor >= 1 && Math.random() > 0.5) return null;
    let value;
    do {
        // 去重
        value = randomValue(cursor);
    } while (values.includes(value));
    values.push(value);
    return new TreeNode(value, build(depth, values, cursor + 1), build(depth, values, cursor + 1));
};

const generate = () => {
    let {depth} = read();
    const values = [];
    return build(depth || 3, values);
};

module.exports = generate;


