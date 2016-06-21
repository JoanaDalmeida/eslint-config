module.exports = {
    "settings": {
        "ecmascript": 6
    },
    "parser": "babel-eslint",
    "plugins": [
    ],
    "ecmaFeatures": {
        "jsx": true
        "blockBindings": true,
        "forOf": true,
        "classes": true,
        "templateStrings": true,
        "defaultParams": true,
        "superInFunctions": true,
        "modules": true,
        "arrowFunctions": true,
        "objectLiteralComputedProperties": true,
        "objectLiteralDuplicateProperties": true,
        "objectLiteralShorthandMethods": true,
        "objectLiteralShorthandProperties": true,
        "spread": true,
        "destructuring": true
    },
    "globals": {
        "$": true,
        "JQuery": true
        "require": true,
        "_": true,
        "Promise": true,
        "fetch": true,
        "moment": true,
        "vsca_pageTag": true,
        "Vsca": true,
        "angular": true
    },
    "env": {
        "browser": true,
        "node": true
    },
    "rules": {
        "valid-jsdoc": [
            2,
            {
                "requireParamDescription": true,
                "requireReturn": false
            }
        ],
        "quotes": [2, "single"],
        "eqeqeq": 2,
        "strict": [2, "never"],
        "camelcase": 2,
        "no-underscore-dangle": 0,
        "new-cap": 2,
        "comma-dangle": 2,
        "no-var": 2,
        "indent": [2, 4, {"SwitchCase": 1}],
        "brace-style": [2, "1tbs", { "allowSingleLine": true }],
        "comma-style": [2, "last"],
        "func-names": 2,
        "key-spacing": [2, {"beforeColon": false,"afterColon": true}],
        "max-nested-callbacks": [2, 3],
        "no-multiple-empty-lines": 2,
        "quote-props": [2, "as-needed"],
        "no-use-before-define": 2,
        "default-case": 2,
        "dot-notation": 2,
        "no-alert": 2,
        "no-eval": 2,
        "no-lone-blocks": 2,
        "no-multi-spaces": 2,
        "no-native-reassign": 2,
        "no-multi-str": 2,
        "no-new-wrappers": 2,
        "no-redeclare": 2,
        "no-return-assign": 2,
        "no-self-compare": 2,
        "no-throw-literal": 2,
        "no-unused-expressions": 2,
        "no-warning-comments": [1, { "terms": ["todo", "fixme"], "location": "anywhere" }],
        "radix": 2,
        "wrap-iife": 2,
        "no-constant-condition": 2,
        "no-dupe-args": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-empty": 2,
        "no-extra-semi": 2,
        "no-func-assign": 2,
        "no-sparse-arrays": 2,
        "no-unreachable": 2,
        "use-isnan": 2,
        "valid-typeof": 2,
        //"filenames/filenames": [2, "^[a-z-]+$"],
        "space-before-blocks": 2,
        "arrow-spacing": 2
    }
};
