var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API: '"https://tpm.stavtop.club"',
  // API: '"http://127.0.0.1:8040"',
  zan_path: '"pages/apps/largess/detail?accountId=5686224"',
  client_id: '"2"',
  client_secret: '"KniOVdV0l8GAFT8YFv6qYoUPTnBKHCyQVhFQdNT5"'
})

// Prod
// Encryption keys generated successfully.
// Personal access client created successfully.
// Client ID: 1
// Client Secret: PebTGFSHimMQ2tmqC4PGkXhGWoH8vzv993VdD2Dd
// Password grant client created successfully.
// Client ID: 2
// Client Secret: KniOVdV0l8GAFT8YFv6qYoUPTnBKHCyQVhFQdNT5


// Dev
// Encryption keys generated successfully.
// Personal access client created successfully.
// Client ID: 3
// Client Secret: jMA6zuBNTahqCX2Ucwn7ZyZ9pgg7tDK2BtNOpvtn
// Password grant client created successfully.
// Client ID: 4
// Client Secret: VoTjvqdQAGjE2WdvuCB03tK4VhEl8G79VIVx59IR