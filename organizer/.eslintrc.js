module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest":true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
        
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-unused-vars": [0, { "vars": "local", "args": "all"}],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};