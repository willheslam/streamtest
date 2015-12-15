'use strict'

const entry = {
  'streamtest': './index.js'
}

const output = {
  path         : './dist'
, filename     : '[name].js'
, publicPath   : '/dist'
}

const plugins = [
]

const moduleConfig = {
  loaders: [{ test: /\.js$/, loader: 'webpack-traceur?runtime&blockBinding' }]
}

module.exports = {
  entry
, output
, plugins
, devtool: '#source-map'
, module : moduleConfig
}
