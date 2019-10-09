const ruleDevTsx: import('webpack').Rule = {
    test: /\.ts(x?)$/i,
    use: ['ts-loader'],
    exclude: /node_modules/
}

export { ruleDevTsx }
