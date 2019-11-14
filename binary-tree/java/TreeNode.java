

class TreeNode {
    private TreeNode left;
    private TreeNode right;
    private int val;

    public TreeNode(int val, TreeNode left, TreeNode right) {
        this.left = left;
        this.right = right;
        this.val = val;
    }

    private int randomValue(int depth) {
        return Math.ceil(Math.random() * depth * 10);
    }

    static TreeNode tree(int depth, int cursor =0) {
        if (cursor >= depth) return null;
        if (cursor >= 1 && Math.random() > 0.5) return null;
        return new TreeNode(randomValue(cursor), build(depth, cursor + 1), build(depth, cursor + 1));
    }
}