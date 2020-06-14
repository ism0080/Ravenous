const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const customWebpackConfig = require('../web/webpack.config')

module.exports = {
  stories: ['../../packages/**/*.stories.[tj]sx'],
  webpackFinal: async (config, { configType }) => {
    config.resolve.extensions.push('.tsx', '.ts', '.less')
    config.module = {
      ...config.module,
      rules: customWebpackConfig.module.rules,
    }

    return config
  },
}
