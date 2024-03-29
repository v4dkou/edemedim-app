const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

// our packages that will now be included in the CRA build step
const appIncludes = [
  resolveApp('src'),
  resolveApp('../components/src'),
  resolveApp('../../assets'),
]

const cssLoaderConfiguration = {
    test: /\.(css)$/,
    include: [
        path.resolve(__dirname, "not_exist_path")
    ],
    loader: "style!css"
};

module.exports = function override(config, env) {
  // allow importing from outside of src folder
  config.resolve.plugins = config.resolve.plugins.filter(
    plugin => plugin.constructor.name !== 'ModuleScopePlugin'
  )
  config.module.rules[0].include = appIncludes
  config.module.rules[1] = cssLoaderConfiguration
  config.module.rules[2].oneOf[1].include = appIncludes
  config.module.rules[2].oneOf[1].options.plugins = [
    require.resolve('babel-plugin-react-native-web'),
  ].concat(
      config.module.rules[2].oneOf[1].options.plugins
          .filter((plugin) => !(new Set(['react-native-gesture-handler', 'react-native-svg']).has(plugin)))
  )
  config.module.rules = config.module.rules.filter(Boolean)

  config.module.rules.push({
      test: /\.ttf$/,
      use: [
          {
              loader: 'ttf-loader',
              options: {
                  name: './[hash].[ext]',
              },
          },
      ],
      include: [
          path.resolve(appDirectory, './src/assets'),
          path.resolve(appDirectory, './assets'),
      ],
  })
  config.plugins.push(
    new webpack.DefinePlugin({ __DEV__: env !== 'production' })
  )
  return config
}
