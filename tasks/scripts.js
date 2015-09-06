var gulp = require('gulp');
var streamqueue = require('streamqueue');
var browserify = require('browserify');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var config = require('../src/config');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

module.exports = function() {
    var vendor = gulp.src([]).pipe(concat('vendor-scripts.js'));

    var application = browserify({
            entries: ['./assets/js/toodles.js'],
            noParse: ['jquery'],
            transform: []
        }).bundle()
          .pipe(source('scripts.js'))
          .pipe(buffer())
          .pipe(uglify())
          .pipe(concat('minified-scripts.js'));
    
    return streamqueue({ objectMode: true }, application, vendor)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('public/'));

};
