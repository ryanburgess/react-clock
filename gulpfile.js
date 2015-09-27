var gulp = require('gulp');
var rename = require('gulp-rename');
var browserify = require('browserify');
var babel = require('gulp-babel');
var source = require('vinyl-source-stream');

gulp.task('scripts', function () {
    return gulp.src('jsx/clock.jsx')
      .pipe(babel())
      .pipe(rename('index.js'))
      .pipe(gulp.dest(''));
});

gulp.task('example', function() {
 var entryFile = './jsx/clientApp.jsx';

  var bundler = browserify({
    extensions: ['.js', '.es6.js', '.jsx'],
    transform: ['babelify']
  });

  bundler.add(entryFile);

  var stream = bundler.bundle();
  stream.on('error', function (err) { console.error(err.toString()) });

  stream
    .pipe(source(entryFile))
    .pipe(rename('app.js'))
    .pipe(gulp.dest(''));
});

gulp.task('watch', function() {
  gulp.watch(['./jsx/**/*'], ['scripts', 'example']);
});
gulp.task('default', ['watch']);
