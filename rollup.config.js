import npm from 'rollup-plugin-npm'
import babel from 'rollup-plugin-babel'

export default {
  entry: 'index.js',
  dest: 'dist/rollup.bundle.js',
  format: 'iife',
  plugins: [
    npm({jsnest: true, main: true})
  , babel({ presets: ['es2015-rollup'] })
  ]
}
