'use strict';

const gulp = require('gulp');
const del = require('del');
const concat = require('gulp-concat');
const replace = require('gulp-replace');
const minifyCss = require('gulp-minify-css');
const minifyJs = require('gulp-minify');
const minifyHtml = require('gulp-html-minifier');
const htmlReplace = require('gulp-html-replace');


function clear() {
    return del(['dest/css', 'dest/js', 'dest/*.html']);
}


/* css minify */
function commonCss() {
    return gulp.src('app/css/common/**/*.css')
        .pipe(concat('common-style.min.css'))
        .pipe(minifyCss())
        .pipe(replace(new RegExp('([.][.]\/)+', 'g'), '\.\.\/'))
        .pipe(gulp.dest('dest/css'));
}

function mainCss() {
    return gulp.src('app/css/main/**/*.css')
        .pipe(concat('main-style.min.css'))
        .pipe(minifyCss())
        .pipe(replace(new RegExp('([.][.]\/)+', 'g'), '\.\.\/'))
        .pipe(gulp.dest('dest/css'));
}

const css = gulp.series(commonCss, mainCss);
/* ----------------------------------*/

/* js minify */
function commonJs() {
    return gulp.src('app/js/common/**/*.js')
        .pipe(minifyJs({
            noSource: true,
        }))
        .pipe(concat('common-bundle.min.js'))
        .pipe(gulp.dest('dest/js'));
}

function mainJs() {
    return gulp.src('app/js/main/**/*.js')
        .pipe(minifyJs({
            noSource: true,
        }))
        .pipe(concat('main-bundle.min.js'))
        .pipe(gulp.dest('dest/js'));
}

const js = gulp.series(commonJs, mainJs);
/* ----------------------------------*/

function html() {
    return gulp.src('app/*.html')
        .pipe(htmlReplace({
            /* css */
            common_css: 'css/common-style.min.css',
            main_css: 'css/main-style.min.css',

            /* js */
            common_js: 'js/common-bundle.min.js',
            main_js: 'js/main-bundle.min.js',
        }))
        .pipe(minifyHtml({collapseWhitespace: true}))
        .pipe(gulp.dest('dest'));
}

exports.default = gulp.series(clear, css, js, html);
exports.clear = clear;
