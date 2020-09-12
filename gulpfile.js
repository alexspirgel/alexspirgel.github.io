const gulp = require('gulp');
const gulpSass = require('gulp-sass');

gulp.task('sass', () => {
  return gulp.src('./src/css/index.scss')
    .pipe(gulpSass().on('error', gulpSass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', () => {
  gulp.watch(['./src/css/*.scss', './src/css/**/*.scss'], gulp.series(['sass']));
});

gulp.task('default', gulp.parallel(['sass', 'watch']));