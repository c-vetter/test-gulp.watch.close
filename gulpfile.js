var gulp = require('gulp')

gulp.task('test', done => {
  gulp.watch('.').close();
  done();
})

