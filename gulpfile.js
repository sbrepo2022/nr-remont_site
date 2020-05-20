'use strict';

const gulp = require('gulp');
const del = require('del');
const concat = require('gulp-concat');
const minifyCss = require('gulp-minify-css');

function css(callback) {
    return gulp.src('app/css/**/*.css')
        .pipe(concat('style.min.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('dest/css'));
}

function clear() {
    return del('dest');
}

exports.default = gulp.series(clear, css);
exports.clear = clear;
