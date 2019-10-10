const ruleDevCss: import('webpack').Rule = {
    test: /\.css$/i,
    use: [
        'style-loader',
        { loader: 'css-loader', options: { importLoaders: 1, modules: true } },
        'postcss-loader',
    ],
}

export { ruleDevCss }
