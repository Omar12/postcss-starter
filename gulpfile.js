var gulp = require('gulp');
var cssnext = require("gulp-cssnext");

gulp.task("css", function() {
  gulp.src('./src/*.css')
    .pipe(cssnext({
        compress: false
    }))
    .pipe(gulp.dest("./dist"))
});

gulp.task('default', function() {
  console.log('Run "gulp css"');
});