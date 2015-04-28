var postcss = require('gulp-postcss');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer-core');
var mqpacker = require('css-mqpacker');
var csswring = require('csswring');

var cssnext = require("gulp-cssnext")

gulp.task("stylesheets", function() {
  gulp.src("src/stylesheets/index.css")
    .pipe(cssnext({
        compress: true
    }))
    .pipe(gulp.dest("./dist/stylesheets"))
});