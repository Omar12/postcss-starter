var gulp = require('gulp');
var postcss = require('gulp-postcss');
var extend = require('postcss-simple-extend');
var nested = require('postcss-nested');
var forloops = require('postcss-for');
var vars = require('postcss-simple-vars');
var mixins = require('postcss-mixins');
var calc = require('postcss-calc');
var autoprefixer = require('autoprefixer-core');

gulp.task('css', function () {
    var processors = [
        extend,
        nested,
        forloops,
        vars,
        mixins,
        calc,
        autoprefixer({browsers: ['last 2 versions']})
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dist'));
});