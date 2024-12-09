const browserSync = require('browser-sync').create();
const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');
const sass = require('gulp-sass')(require('sass'));
const gulpCopy = require('gulp-copy');

gulp.task('html', function(){

  return gulp.src('./views/pages/**/*.njk')
    .pipe(nunjucksRender({
      path: ['./views']
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());

});

gulp.task('sass', function() {
  return gulp.src('./sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./dist/css'))
		.pipe(browserSync.stream());
});

gulp.task('images', function() {
	return gulp.src('./images/**/*')
		.pipe(gulpCopy('./dist'))
		.pipe(browserSync.stream());
});

gulp.task('serve', gulp.series(['html', 'sass'], function(){

  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });

  gulp.watch('./images/**/*', gulp.series('images'));
	gulp.watch('./sass/**/*.scss', gulp.series('sass'));
  gulp.watch('./views/**/*.njk', gulp.series('html'));
  gulp.watch('./dist/*.html').on('change', browserSync.reload);

}));

gulp.task('default', gulp.series('serve'));
