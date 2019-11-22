# leetcode习题集

## Javascript版使用：

1. 命令：

`npm run exec subject=xxx task=xxx depth=xxx`

2. 参数说明：
- `subject | s`: 要执行的主题，如`binary-tree`(二叉树)
- `task | t`: 要执行的具体任务，如`preorder`（先序遍历）
- `depth | d`: 可选，随机生成的树的最大层数，如 `5`。如不提供此参数，则默认为 `3` 

3. 示例：

```shell script
$ npm run exec s=binary-tree t=pre-order d=5

> leetcode@1.0.0 exec /Users/moicen/Workspace/alchemy-studio/leetcode
> node utils/cmd.js "s=binary-tree" "t=pre-order" "d=5"

"Tree : "
{
    "left": null,
    "right": {
        "left": {
            "left": {
                "left": {
                    "left": null,
                    "right": null,
                    "val": 13
                },
                "right": null,
                "val": 2
            },
            "right": {
                "left": null,
                "right": null,
                "val": 7
            },
            "val": 5
        },
        "right": {
            "left": null,
            "right": {
                "left": {
                    "left": null,
                    "right": null,
                    "val": 34
                },
                "right": {
                    "left": null,
                    "right": null,
                    "val": 5
                },
                "val": 15
            },
            "val": 11
        },
        "val": 6
    },
    "val": 0
}
"Preorder travel with recursive: "
[ 0, 6, 5, 2, 13, 7, 11, 15, 34, 5 ]
"Preorder travel with iterate: "
[ 0, 6, 5, 2, 13, 7, 11, 15, 34, 5 ]
```

