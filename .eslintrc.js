module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential", 
    "plugin:prettier/recommended", 
    "eslint:recommended"
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "prettier/prettier": [
      "error",
      {
        "eslintIntegration": true, // 开启 eslint 支持
        "singleQuote": true,   // 字符串单引号
        "semi": false,         // 结尾不加分号
        "bracketSpacing": true, // 在对象字面量两个大括号之间使用空格
        "jsxBracketSameLine": true,
        "insertPragma": true
      }
    ]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
