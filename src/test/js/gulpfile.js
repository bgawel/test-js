'use strict';

var gulp = require('gulp');

gulp.paths = {
  src: '../../main/webapp/js'
};

require('require-dir')('./gulp');

gulp.task('default', [], function () {
    gulp.start('test');
});
