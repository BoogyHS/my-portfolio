// eslint-disable-next-line no-undef
module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'google',
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true,
        },
        'ecmaVersion': 'latest',
        'sourceType': 'module',
    },
    'plugins': [
        'react',
    ],
    'overrides': [
        {
            'files': [
                '**/*.test.js',
                '**/*.test.jsx'
            ],
            'env': {
                'jest': true
            }
        }
    ],
    'rules': {
        'indent': ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'linebreak-style': 0,
        'arrow-parens': 0,
        'operator-linebreak': 0,
        'comma-dangle': 'off',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'object-curly-spacing': ['error', 'always'],
        'max-len': ['error', { 'code': 150 }]
    },
};
