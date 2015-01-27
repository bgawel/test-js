'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    jsSrc: '../../main/webapp/js',

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      js: {
        files: ['<%= jsSrc %>/app/**/*.js'],
        tasks: ['jshint:jsSrc']
      },
      jsTest: {
        files: ['unit/**/*.js'],
        tasks: ['jshint:test']
      },
      gruntfile: {
        files: ['Gruntfile.js'],
        tasks: ['jshint:test']
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      jsSrc: {
        options: {
          jshintrc: '../../main/resources/.jshintrc'
        },
        src: ['<%= jsSrc %>/app/**/*.js']
      },
      test: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: ['Gruntfile.js', 'unit/**/*.js']
      }
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'unit/karma.conf.js',
        singleRun: true
      }
    }
  });

  grunt.registerTask('test', [
    'jshint:jsSrc',
    'jshint:test',
    'karma'
  ]);
  
  grunt.registerTask('test:unit', [
    'jshint:test',
    'karma:unit'
  ]);

  grunt.registerTask('default', [
    'test'
  ]);
};
