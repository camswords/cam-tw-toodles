var gulp = require('gulp');
var gulps = require('require-dir')('./tasks');

gulp.task('styles', gulps['styles']);
gulp.task('scripts', gulps['scripts']);

gulp.task('serve', ['styles', 'scripts'], gulps['serve']);
gulp.task('unused-dependencies', gulps['unused-dependencies']);
