// test/index.js
// require all test files using special Webpack feature
import 'babel-polyfill'

let testsContext = require.context('./specs', true, /\.spec$/)
testsContext.keys().forEach(testsContext)