var gulp = require('gulp')

gulp.task('default', done => {
  gulp.watch('.').close()
  done()
})

gulp.task('works', done => {
  var watcher = gulp.watch('.')

  watcher.on('ready', watcher.close)

  done()
})

