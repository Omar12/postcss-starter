var gulp = require('gulp');
var cssnext = require("gulp-cssnext");

gulp.task("css", function() {
  gulp.src('./src/*.css')
    .pipe(cssnext({
        compress: true
    }))
    .pipe(gulp.dest("./dist"))
});