// @see: https://prettier.io/docs/en/options

module.exports = {
  // 指定最大换行长度
  printWidth: 120,
  // 缩进制表符宽度 | 空格数
  tabWidth: 2,
  // 使用制表符而不是空格缩进行 (true：制表符，false：空格)
  useTabs: false,
  // 结尾使用分号 (true：有，false：没有)
  semi: true,
  // 使用单引号 (true：单引号，false：双引号)
  singleQuote: false,

  /**
   * 在对象字面量中决定是否将属性名用引号括起来，可选值 "<as-needed|consistent|preserve>"
   *
   * as-needed  - 仅在需要时给对象属性加引号
   * consistent - 所有属性要么都加，要么都不加
   * preserve   - 与输入格式保持一致
   */
  quoteProps: "consistent",
  // 在JSX中使用单引号而不是双引号 (true：单引号，false：双引号)
  jsxSingleQuote: false,

  /**
   * 多行时尽可能打印尾随逗号，可选值 "<none|es5|all>"
   *
   * none       - 对象属性最后一个属性不加逗号
   * es5        - 对象属性最后一个属性加逗号
   * all        - 所有地方均加逗号，含函数最后一位参数
   */
  trailingComma: "es5",
  // 在对象，数组括号与文字之间加空格 "{ foo: bar }" (true：有，false：没有)
  bracketSpacing: true,
  // 将右标签 > 放在最后一行的末尾，而不是单独放在下一行 (true：放末尾，false：单独一行)
  bracketSameLine: false,
  // (x) => {} 箭头函数参数只有一个时是否要有小括号 (avoid：省略括号，always：不省略括号)
  arrowParens: "always",

  // 这两个选项可以指定格式化代码的特定范围，而不是整个文件，在处理大型文件时有用，可指定仅格式化某一个块的代码
  rangeStart: 0,
  rangeEnd: Infinity,

  // parser - 指定解析器：https://prettier.io/docs/en/options.html#parser （默认自动判断文件类型）

  // 在需要格式化的文件顶部添加特定的 Pragma 注释 （true：需要在需要格式化的文件写@prettier，false：不需要在每个文件顶部写@prettier 也能格式化）
  requirePragma: false,
  // 可以在文件顶部插入一个特殊标记，表明该文件已使用 Prettier 格式化 （false：不需要额外添加， true：需要添加）
  insertPragma: false,

  /**
   * 用于控制文本或注释是否应该被换行以及如何进行换行，可选值 "<never|always|preserve>"
   *
   * never      - 将长文本或注释块保持在一块，即使已经超过行宽
   * always     - 总是换行，尽可能将长文本拆分成多行
   * preserve   - 与输入格式保持一致
   */
  proseWrap: "always",

  /**
   * 控制在 html 中如何处理空白字符，可选值 "<css|strict|ignore>"
   *
   * css        - 遵守 CSS 风格，即左右两边各一个空格
   * strict     - 保留原样，不对空格进行处理
   * ignore     - 去掉空格，减少空格对代码的影响
   */
  htmlWhitespaceSensitivity: "ignore",

  // 控制在 Vue 单文件组件中 <script> 和 <style> 标签内的代码缩进方式
  vueIndentScriptAndStyle: false,

  // 换行符使用 lf 结尾是 可选值 "<auto|lf|crlf|cr>"
  endOfLine: "lf",

  /**
   * 是否对嵌入式语言，例如：HTML 中的 CSS 或 JS 进行格式化，可选值 "<auto|off>"
   *
   * auto       - 如果可以识别则格式化
   */
  embeddedLanguageFormatting: "auto",

  // 是否将 HTML 每个属性单独放一行
  singleAttributePerLine: false,
};
