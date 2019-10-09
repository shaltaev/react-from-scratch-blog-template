const ruleDevCss: import('webpack').Rule = {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader']
}

export { ruleDevCss }
