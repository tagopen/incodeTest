module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  rules: {
    "react/jsx-closing-bracket-location": [
      0,
      {
        selfClosing: "tag-aligned",
        nonEmpty: "after-props"
      }
    ],
    "react/require-default-props": 0,
    "global-require": 0,
    "no-restricted-globals": 0,
    "no-unused-expressions": 0,
    "react/jsx-indent": 0 /* conflict with prettier */ ,
    "react/jsx-wrap-multilines": 0 /* conflict with prettier */ ,
    "react/jsx-one-expression-per-line": 0 /* conflict with prettier */ ,
    "no-unused-vars": 0,
    "jsx-a11y/label-has-for": [
      2,
      {
        required: {
          some: ["nesting", "id"]
        }
      }
    ],
    // this does not work with nextjs Link, switching to warn to have it highlighted just in case of any otehr issues
    "jsx-a11y/anchor-is-valid": "warn",
    "flowtype/no-types-missing-file-annotation": 0,
    "import/no-extraneous-dependencies": [
      0,
      {
        devDependencies: [".storybook/**", "stories/**"]
      }
    ],
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/ban-ts-ignore": "warn",
    "@typescript-eslint/interface-name-prefix": 0
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src", "stories"],
        extensions: [".js", ".jsx", ".ts", ".tsx", ".stories.tsx"]
      }
    }
  },
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module" // Allows for the use of imports
  },
  env: {
    browser: true,
    jest: true
  },
  globals: {
    fetch: false,
    require: true,
    __DEV__: true,
    window: true,
    FormData: true
  }
};
