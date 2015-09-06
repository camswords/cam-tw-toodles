var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var nib = require('nib');

module.exports = function() {
    
    gulp.src(['assets/css/styles.styl'])
        .pipe(stylus({
            compress: true,
            "include css": true,
            use: [nib()]
        }))
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('public'));
};
