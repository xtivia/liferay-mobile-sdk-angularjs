var gulp = require('gulp');
var concat = require('gulp-concat');
var del = require('del');
var builder = require('./src/index.js')({server:'http://liferaydemo.xtivia.com',root:'./angularjs'});

gulp.task('clean', function() {
    return del(['./angularjs/js/*.js','./angularjs/json/*.json']);
});

gulp.task('clean-dist',['clean'], function() {
    return del(['./dist/*']);
});

gulp.task('builder',['clean'], function() {
    return builder.generate();
});

gulp.task('default',['builder'], function() {
    return gulp.src(['./js/sdk.62.module.js','./js/sdk.62.config.js','./js/sdk.62.service.js','./angularjs/**/*.js'])
            .pipe(concat('liferay.mobile.sdk.62.js'))
            .pipe(gulp.dest('./dist'));
});
