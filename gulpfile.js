var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var builder = require('./')({server:'http://liferaydemo.xtivia.com',root:'./angularjs'});

gulp.task('jasmine', function() {
    gulp.src('spec/nodejs/*.js')
        .pipe(jasmine({verbose:true, includeStackTrace: true}));
});

gulp.task('watch', function () {
    gulp.watch(['src/*.js','spec/nodejs/*.js'], ['jasmine']);
});

gulp.task('default',['watch']);