# Prettier Config

```shell
pnpm i @coder/prettier-config prettier -D
```

## 新增 prettier 文件

```js
// .prettierrc.js
const CoderPrettierConfig = require("@coder/prettier-config");

module.exports = {
  ...FosPrettierConfig,

  // 自定义配置
  // semi: true,
};
```

> **更改配置后，需要重启编辑器才会生效**。
