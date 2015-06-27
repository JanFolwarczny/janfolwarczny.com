'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


gulp.task('default', ['less', 'js']);


gulp.task('less', function () {
    return gulp.src('assets/style.less')
        .pipe(less())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('assets/build'));
});


gulp.task('js', function () {
    return gulp.src([
        'bower_components/jquery/dist/jquery.js',
        'bower_components/jquery-unveil/jquery.unveil.js',
        'assets/script.js'
    ])
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('script.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('assets/build'));
});


gulp.task('watch', function () {
    gulp.watch('assets/*.less', ['less']);
    gulp.watch('assets/script.js', ['js']);
});