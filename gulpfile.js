const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');
const browserSync = require('browser-sync').create();

gulp.task('html', function(){

  return gulp.src('./views/*.njk')
    .pipe(nunjucksRender({
      path: ['./views']
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());

});

gulp.task('serve', gulp.series('html', function(){

  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });

  gulp.watch('./views/**/*.njk', gulp.series('html'));
  gulp.watch('./dist/*.html').on('change', browserSync.reload);
  
}));

gulp.task('default', gulp.series('serve'));