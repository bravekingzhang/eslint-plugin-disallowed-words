# eslint plugin

检测代码中的错误的术语。

## 安装

```bash
npm install eslint-plugin-disallowed-words --save-dev

```

## 使用

在你的 `.eslintrc` 文件中添加以下内容：

```json
{
  "plugins": [
    "disallowed-words"
  ],
  "rules": {
    "disallowed-words/no-disallowed-words": ["error", ["模版", "登陆"]]
  }
}

```
