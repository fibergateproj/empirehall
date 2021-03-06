import gulp from 'gulp';
import paths from '../paths';
import cached from 'gulp-cached';

gulp.task('images', () => {
  return gulp
    .src(`${paths.src.images}/**/*.{png,jpg,gif,svg,webp,mp4,webm}`)
    .pipe(cached())
    .pipe(gulp.dest(paths.dist.images));
});
