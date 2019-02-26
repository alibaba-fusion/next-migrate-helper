# 开发指南

## 简介

由于我们在 `@alife/next@1.x` 做了很多非兼容性的变更，为了降低用户从 0.x 升级到 1.x 成本，我们除升级日志外，还额外提供了自动迁移脚本工具 `@ali/next-migrate-helper`。该脚本基于 facebook 的 [jscodeshift](https://github.com/facebook/jscodeshift) 开发，作为全局命令行工具工作。

```
Usage: next-migrate [options]

Scan your code and migrate to target version if you need


Options:

  -V, --version          output the version number
  -m --migrate           migrate your source files to target version automatically
  -t --target <version>  target version (default: v1)
  -h, --help             output usage information
```

## 使用

```
tnpm install @ali/next-migrate-helper
next-migrate ./src            // 只会给出提示
next-migrate ./src --migrate  // 会进行自动修改
```

## 文件夹结构

```
.
├── History.md
├── Readme.md
├── bin
│   └── index.js
├── develop-guide.md
├── example
│   └── Index.jsx
├── lib
│   ├── helpers                              // 迁移帮助代码
│   │   ├── deprecate-component.js           // 废弃组件
│   │   ├── deprecate-prop.js                // 废弃属性
│   │   ├── find.js                          // 发现指定的组件或属性
│   │   ├── replace-component.js             // 更新组件名
│   │   └── replace-prop.js                  // 更新属性名
│   ├── index.js
│   ├── transformer.js
│   └── utils
│       ├── index.js
│       ├── logger.js
│       └── warn.js
├── package.json
└── rules                                      // 迁移规则
    └── v1                                     // 迁移到的目标版本
        ├── form.js                            // 规则入口文件（推荐用法更加方便）
        ├── input.js
        ├── loading.js
        ├── number-picker.js
        ├── select.js
        └── upload.js
```

## 快速上手

在 `rules/v1/component.js` 新建组件对应的脚本文件，目前提供了4个封装好的迁移帮助方法，具体函数签名为：

``` js
deprecateComponent(componentName, warnInfo)
deprecateProp(componentName, propName, warnInfo)
replaceComponent(oldComponentName, newComponentName, warnInfo)
replaceProp(componentName, oldPropName, newPropName, warnInfo)
```

componentName 除直接支持传入 `Menu` 外，还支持传入子组件 `Menu.Item`，warnInfo 数据结构为：

```
{
  reason: 'Accordion[multiTitle] 以被废弃',
  more: ''
}
```

调用以上4个方法，会生成默认的 reason 字段，如果有特殊需求传入覆盖即可。more 字段，会对应线上升级日志的链接，暂时先不用处理。

以下为示例代码：

``` js
const helper = require('../../lib/helpers/index');

module.exports = [
  helper.replaceProp('Loading', 'addonBefore', 'addonTextBefore'),
  helper.replaceProp('Loading', 'addonAfter', 'addonTextAfter'),
  helper.deprecateProp('Loading', 'shape', {
    reason: '`Loading[shape]` 已被废弃, 默认动效为 fusion-vector"'
  })
];

```

注意如果既有更新组件名，又有更新属性名的规则，请在导出时把更新组件名的规则置于前，以保证能够按照正确的顺序自动迁移。

新建 `/example/index.jsx`，执行 `tnpm run example` 来验证规则是否书写正确，该文件不会进行提交。

## 进阶写法

如果快速上手中封装的4个方法不能满足你的需求，比如你可能参照几个属性的值后，才能修改某些属性，或者要将一个值为数组的属性变更为多个独立的属性，那么你可能需要继续阅读下去，并且了解一下[jscodeshift](https://github.com/facebook/jscodeshift)。支持导出的函数如下：

``` js
module.exports = function(ast, filePath, j) {
  // use j to operate ast
};
```

ast 为 jscodeshift 生成的语法树，filePath 为要迁移文件的路径，j 为 jscodeshift 的 API。
