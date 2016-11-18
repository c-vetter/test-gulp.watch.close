var gulp = require('gulp')

gulp.task('default', done => {
  gulp.watch('.').close();
  done();
})

