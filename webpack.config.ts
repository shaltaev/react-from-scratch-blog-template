import path from 'path'
import { ruleDevCss, ruleDevTsx } from './config/webpack/rules'
import { config as dConfig } from 'dotenv'
import pluginCratorHtml from 'html-webpack-plugin'

dConfig()

const pluginHtml: import('webpack').Plugin = new pluginCratorHtml({
    template: './src/index.template.html'
})

const isProduction: boolean = process.env.NODE_ENV === 'production'

const config: import('webpack').Configuration = {
    mode: isProduction ? 'production' : 'development',
    plugins: [pluginHtml],
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.json']
    },
    module: {
        rules: isProduction ? [] : [ruleDevCss, ruleDevTsx]
    }
}

export default config
