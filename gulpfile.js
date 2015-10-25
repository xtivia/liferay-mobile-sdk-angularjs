var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var wrap = require('gulp-wrap');
var $q = require('q');
var rename = require("gulp-rename");
var builder = require('./')({server:'http://liferaydemo.xtivia.com',root:'./angularjs'});

gulp.task('services', ['generate'], function() {
   gulp.src('angularjs/json/*.json')
       .pipe(wrap({src:'templates/service.txt'},null,{options:{engine:'handlebars'}}))
       .pipe(rename(function(path) {
           path.extname = '.js';
       }))
       .pipe(gulp.dest('./angularjs/js'));
});

gulp.task('jasmine', function() {
    gulp.src('spec/nodejs/*.js')
        .pipe(jasmine({verbose:true, includeStackTrace: true}));
});

gulp.task('generate',function() {
    builder.discover().then(function(res){
        builder.parseAll(res.actions);
    },function(err) {
        throw err;
    });
});

gulp.task('watch', function () {
    gulp.watch(['src/*.js','spec/nodejs/*.js'], ['jasmine']);
});

gulp.task('default',['watch']);