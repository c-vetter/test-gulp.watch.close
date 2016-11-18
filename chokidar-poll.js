var chokidar = require('chokidar')

console.log('init')

// configuration taken from webpack
var watcher = chokidar.watch('.', {
  ignoreInitial: true,
  persistent: true,
  followSymlinks: false,
  depth: 0,
  atomic: false,
  alwaysStat: true,
  ignorePermissionErrors: true,
  usePolling: true
})

console.log('watching')

watcher.close()

console.log('closed')

