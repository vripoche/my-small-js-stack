var _ = require('lodash');

var gulp = require('gulp');
var connect = require('gulp-connect');
var source = require('vinyl-source-stream');

var browserify = require('browserify');
var watchify = require('watchify');
var mochify = require('mochify');

var bundler = watchify(browserify(_.extend({}, watchify.args, {
  entries: ['./src/app.js'],
  extensions: ['.js'],
  debug: true,
  fullPaths: true
})));

function bundle() {
  return bundler
    .bundle()
    .on('error', console.error)
    .pipe(source('index.js'))
    .pipe(gulp.dest('./public/'))
    .pipe(connect.reload());
}

bundler.on('update', bundle);
bundler.on('log', console.log);

gulp.task('build', function() {
  bundle();
});

gulp.task('connect', function() {
  connect.server({
    root: './public/',
    port: 8888,
    livereload: true
  });
});

gulp.task('test', function() {
  mochify('./test/bootstrap.js', {
    reporter : 'spec',
    cover    : false,
    watch    : true
  }).bundle();
});

gulp.task('default', ['build', 'connect']);
