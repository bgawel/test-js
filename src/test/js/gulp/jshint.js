'use strict';

var gulp = require('gulp');

var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

var paths = gulp.paths;

gulp.task('checkstyle-src', [], function () {
    var fileToCheck = [
        paths.src + '/app/**/*.js'
    ];

    gulp.src(fileToCheck)
        .pipe(jshint('../../main/resources/.jshintrc'))
        .pipe(jshint.reporter(stylish));
});

gulp.task('checkstyle-test', [], function () {
    var fileToCheck = [
        'unit/**/*.js',
        'gulpfile.js'
    ];

    gulp.src(fileToCheck)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter(stylish));
});

gulp.task('checkstyle', ['checkstyle-src', 'checkstyle-test'], function () {
});