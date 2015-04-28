var postcss = require('gulp-postcss');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer-core');
var mqpacker = require('css-mqpacker');
var csswring = require('csswring');

gulp.task('css', function () {
    var processors = [
        autoprefixer({browsers: ['last 2 versions']}),
        mqpacker,
        csswring
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./build'));
});

var cssnext = require("gulp-cssnext")

gulp.task("stylesheets", function() {
  gulp.src("src/stylesheets/index.css")
    .pipe(cssnext({
        compress: true
    }))
    .pipe(gulp.dest("./dist/stylesheets"))
});