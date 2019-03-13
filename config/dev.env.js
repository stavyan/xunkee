var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API: '"https://tpm.stavtop.club"',
  zan_path: '"pages/apps/largess/detail?accountId=5686224"',
  client_id: '"2"',
  client_secret: '"5rblWYdXKfjTu2TN3n4HtxePPvC0BkIEw6135F14"'
})
