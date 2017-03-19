var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass',function () {
    return gulp.src("css/.scss")
        .pipe(sass())
        .pipe(gulp.dest("styles"));
})

gulp.task('default',['sass']);