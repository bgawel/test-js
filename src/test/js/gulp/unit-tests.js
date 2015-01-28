'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

function runTests (singleRun, done) {

  var testFiles = []; // specified in karma.conf.js

  gulp.src(testFiles)
    .pipe($.karma({
      configFile: 'unit/karma.conf.js',
      action: (singleRun)? 'run': 'watch'
    }))
    .on('error', function (err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
}

gulp.task('test', ['checkstyle'], function (done) { runTests(true /* singleRun */, done) });
gulp.task('test:auto', ['checkstyle'], function (done) { runTests(false /* singleRun */, done) });
