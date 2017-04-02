const svelte = require('rollup-plugin-svelte')

module.exports = {
  format: 'iife',
  entry: './test/all.test.js',
  dest: './test/__build__.js',
  plugins: [
    svelte({
      dev: true
    })
  ]
}
