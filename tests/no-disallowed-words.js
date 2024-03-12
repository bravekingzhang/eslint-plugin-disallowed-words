const RuleTester = require("eslint").RuleTester;
const rule = require("../rules/no-disallowed-words");

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2015 }, // 根据需要调整 ECMAScript 版本
});

ruleTester.run("no-disallowed-words", rule, {
  valid: [
    // 在这里添加符合规则的代码示例
    {
      code: "'电子签，模板，'",
      options: [["模版", "登陆"]],
    },
  ],
  invalid: [
    // 在这里添加违反规则的代码示例，并指定期望的错误消息
    {
      code: "'模版编辑，实际应该是模板，模板，模板'",
      options: [["模版", "登陆"]],
      errors: [{ message: 'The word "模版" is disallowed.' }],
    },
  ],
});
