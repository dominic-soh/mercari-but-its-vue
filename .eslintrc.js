module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
    },
    parser: "vue-eslint-parser",
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: '@typescript-eslint/parser',
    },
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:nuxt/recommended',
      'plugin:vue/vue3-recommended',
    ],
    plugins: ['@typescript-eslint'],
    rules: { 
        "vue/multi-word-component-names": 0,
     },
}