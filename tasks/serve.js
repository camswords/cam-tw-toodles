var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

module.exports = function() {

    gulp.watch('assets/css/**/*.styl', ['styles']);
    gulp.watch('assets/js/**/*.js', ['scripts']);

    nodemon({
        script: './src/server.js',
        watch: ['src'],
        ext: 'js'
    });
};
