var gulp = require('gulp');
var rename = require('gulp-rename');
var babel = require('gulp-babel');

gulp.task('scripts', function () {
    return gulp.src('jsx/clock.jsx')
      .pipe(babel())
      .pipe(rename('index.js'))
      .pipe(gulp.dest(''));
});

gulp.task('watch', function() {
  gulp.watch(['./jsx/**/*'], ['scripts']);
});
gulp.task('default', ['watch']);
