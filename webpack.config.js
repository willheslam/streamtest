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
  loaders: [{
    test  : /\.jsx?$/
  , loader: 'babel-loader'
  , query : { presets: ['es2015']
    }
  }]
}

module.exports = {
  entry
, output
, plugins
, devtool: '#source-map'
, module : moduleConfig
}
