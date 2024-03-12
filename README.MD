# eslint plugin

检测代码中的错误的术语。

## 安装

```bash
npm install @tencent/eslint-plugin-disallowed-words
```

## 使用

在你的 `.eslintrc` 文件中添加以下内容：

```json
module.exports = {
    "plugins": [
        "eslint-plugin-disallowed-words" //
    ],
    "rules": {
        "eslint-plugin-disallowed-words/no-disallowed-words": ["error", ["模版", "其他不允许的词"]]
    }
};
```
