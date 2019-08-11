module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'double'],
    'no-console': 'off'
  }
}