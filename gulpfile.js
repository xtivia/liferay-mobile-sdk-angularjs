var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var concat = require('gulp-concat');

gulp.task('jasmine', function() {
    return gulp.src('spec/nodejs/*.js')
        .pipe(jasmine({verbose:true, includeStackTrace: true}));
});

gulp.task('package',['jasmine'],function() {
   return gulp.src(['angularjs/js/*.js','js/sdk.62.js'])
       .pipe(concat('liferay.mobile.sdk.62.js'))
       .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
    gulp.watch(['src/*.js','spec/nodejs/*.js'], ['jasmine']);
});

gulp.task('default',['watch']);