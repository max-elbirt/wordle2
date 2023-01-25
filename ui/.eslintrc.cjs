module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'eslint:recommended'],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        semicolon: 'off',
    },
};
