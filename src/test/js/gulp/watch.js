'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

gulp.task('watch', ['checkstyle'], function () {
  gulp.watch([
    paths.src + '/app/**/*.js',
    'unit/**/*.js',
    'gulpfile.js'
  ], ['checkstyle']);
});
