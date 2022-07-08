module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  ignorePatterns: ['e2e/**'],
  extends: [
    'plugin:import/typescript',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    'react/prop-types': [0],
    'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],
    'react/display-name': [0],
    '@typescript-eslint/no-explicit-any': [0],
    '@typescript-eslint/no-empty-function': [0],
    '@typescript-eslint/explicit-module-boundary-types': [0],
    'react-hooks/exhaustive-deps': [0],
    'arrow-body-style': [1, 'as-needed'],
    'no-debugger': 'error',
    'no-implicit-coercion': 'error',
    "react/react-in-jsx-scope": "off",
    // allow jsx syntax in js files (for next.js project)
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }], //should add ".ts" if typescript project
  }
};