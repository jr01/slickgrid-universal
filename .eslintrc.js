module.exports = {
  "parser": "@typescript-eslint/parser",
  root: true,
  "env": {
    "browser": true,
    "node": true
  },
  "globals": {
    "Slick": true,
    "Slicker": true,
    "jQuery": true,
    "$": true,
    "_": true
  },
  "parserOptions": {
    "project": "tsconfig.json",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/class-name-casing": "error",
    "@typescript-eslint/consistent-type-assertions": "off",
    "@typescript-eslint/explicit-member-accessibility": [
      "off",
      {
        "accessibility": "explicit"
      }
    ],
    "@typescript-eslint/indent": [
      "error",
      2,
      {
        "ObjectExpression": "first",
        "FunctionDeclaration": {
          "parameters": "first"
        },
        "FunctionExpression": {
          "parameters": "first"
        },
        "SwitchCase": 1
      }
    ],
    "@typescript-eslint/interface-name-prefix": "error",
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/prefer-for-of": "off",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/space-before-function-paren": ["error", {
      anonymous: "always",
      named: "never",
      asyncArrow: "always"
    }],
    "@typescript-eslint/quotes": [
      2,
      "single",
      { "allowTemplateLiterals": true }
    ],
    "@typescript-eslint/triple-slash-reference": "error",
    "@typescript-eslint/unified-signatures": "error",
    "arrow-parens": [
      "off",
      "as-needed"
    ],
    "camelcase": "off",
    "comma-dangle": "off",
    "complexity": "off",
    "constructor-super": "error",
    "dot-notation": "off",
    "eqeqeq": [
      "error",
      "smart"
    ],
    "guard-for-in": "error",
    "id-blacklist": "off",
    "id-match": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-internal-modules": "off",
    "import/order": "off",
    "indent": "off",
    "max-classes-per-file": "off",
    "max-len": "off",
    "new-parens": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-cond-assign": "error",
    "no-console": "off",
    "no-debugger": "error",
    "no-duplicate-case": "error",
    "no-duplicate-imports": "error",
    "no-empty": 1,
    "no-eval": "error",
    "no-extra-bind": "error",
    "no-fallthrough": "off",
    "no-invalid-this": "off",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-redeclare": "error",
    "no-return-await": "error",
    "no-sequences": "error",
    "no-shadow": [
      "off",
      {
        "hoist": "all"
      }
    ],
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "no-underscore-dangle": "off",
    "no-unsafe-finally": "error",
    "no-unused-expressions": "off",
    "no-unused-labels": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "one-var": [
      "error",
      "never"
    ],
    "prefer-const": "error",
    "prefer-object-spread": "error",
    "radix": "error",
    "semi": [2, "always"],
    "space-in-parens": [
      "error"
    ],
    "spaced-comment": "error",
    "use-isnan": "error",
    "valid-typeof": "off"
  }
};
