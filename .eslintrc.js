module.exports = {
    extends: ['airbnb', 'airbnb/hooks', 'prettier', 'plugin:prettier/recommended'],
    plugins: ['prettier'],
    rules: {
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.js', '.jsx'],
            },
        ],
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'react/jsx-props-no-spreading': [
            0,
            {
                html: 'ignore',
                custom: 'ignore',
                explicitSpread: 'ignore',
            },
        ],
        'prettier/prettier': 'error',
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
        'import/prefer-default-export': 'off',
    },
    globals: {
        window: true,
        document: true,
        localStorage: true,
        FormData: true,
        FileReader: true,
        Blob: true,
        navigator: true,
    },
};
