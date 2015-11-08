var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var concat = require('gulp-concat');

gulp.task('jasmine', function() {
    return gulp.src('spec/nodejs/*.js')
        .pipe(jasmine({verbose:true, includeStackTrace: true}));
});

gulp.task('package',['jasmine'],function() {
   return gulp.src(['js/sdk.62.module.js','js/sdk.62.config.js','js/sdk.62.service.js','angularjs/js/*.js'])
       .pipe(concat('liferay.mobile.sdk.62.js'))
       .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
    gulp.watch(['src/*.js','spec/nodejs/*.js'], ['jasmine']);
});

gulp.task('default',['watch']);